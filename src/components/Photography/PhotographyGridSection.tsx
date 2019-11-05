import 'react-image-lightbox/style.css'

import { Box, Flex, Text } from 'rebass/styled-components'
import { DateTime } from 'luxon'
import { animated, useTransition } from 'react-spring'
import Lightbox from 'react-image-lightbox'
import Link from 'gatsby-link'
import React, { useMemo, useState } from 'react'
import _ from 'lodash'
import fp from 'lodash/fp'

import { useDimensions, useMedia } from 'utils/hooks'

import { ImageZoomGridElement, PhotographySectionHeader } from '.'

interface Props {
  datetime: DateTime
  // The images to be *currently* displayed for this section.
  images: any[]
  slug?: string
  totalNumImages?: number
}

const SeeMoreLink = ({
  href,
  totalNumImages,
}: {
  href: string
  totalNumImages: number
}) => {
  if (totalNumImages <= 6) {
    return (
      <Box
        marginBottom={2}
        marginTop={4}
        style={{ borderTop: '1px solid rgb(221, 221, 221)' }}
      >
        &nbsp;
      </Box>
    )
  } else {
    return (
      <>
        <Flex
          justifyContent="flex-end"
          alignItems="items-center"
          marginBottom="0"
        >
          <Link to={href}>
            <Text
              color="textDarkMuted"
              fontFamily="smallcaps"
              hoverColor="textDark"
              fontSize={4}
            >
              See More →
            </Text>
          </Link>
        </Flex>
        <Box
          marginBottom={4}
          marginTop={2}
          style={{ borderTop: '1px solid rgb(221, 221, 221)' }}
        >
          &nbsp;
        </Box>
      </>
    )
  }
}

const PhotographyGridSection = (props: Props) => {
  const { datetime, images, slug = '/#', totalNumImages = 0 } = props
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [index, setLightboxIndex] = useState(0)

  const sortedImages = useMemo(
    () => _.sortBy(images, 'EXIF.DateTimeOriginal'),
    [images],
  )
  // const sortedImages = _.sortBy(images, 'EXIF.DateTimeOriginal')
  // const lightboxImages = _.map(sortedImages, 'childImageSharp.sizes.srcWebp')
  const lightboxImages = useMemo(
    () => _.map(sortedImages, 'childImageSharp.sizes.srcWebp'),
    [sortedImages],
  )

  const decrementLightboxIndex = () => setLightboxIndex(index - 1)
  const incrementLightboxIndex = () => setLightboxIndex(index + 1)
  const closeLightbox = () => setIsLightboxOpen(false)
  const openLightbox = (imageIndex: number) => {
    setLightboxIndex(imageIndex)
    setIsLightboxOpen(true)
  }

  const getImageAtIndex = (imageIndex: number) =>
    _.get(lightboxImages, imageIndex % lightboxImages.length)
  const lightboxSrc = getImageAtIndex(index)
  const nextImage = getImageAtIndex(index + 1)
  const prevImage = getImageAtIndex(index - 1)

  // Tie media queries to the number of columns.
  const columns = useMedia(
    ['(min-width: 1536px)', '(min-width: 1024px)', '(min-width: 512px)'],
    [4, 3, 2],
    1,
  )
  // Measure the width of the container element.
  const [ref, { width }] = useDimensions()

  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const heights: number[] = new Array(columns).fill(0) // Each column gets a height starting with zero
  const gridItems = sortedImages.map((child, index) => {
    const { childImageSharp } = child
    const imageWidth = child.width || width / columns
    const aspectRatio = _.get(childImageSharp, 'sizes.aspectRatio')
    const height = _.isFinite(child.height)
      ? child.height
      : imageWidth * (2 / aspectRatio)
    // Masonry-grid placing — positions each tile sequentially into the
    // smallest column available.
    const column = heights.indexOf(Math.min(...heights))

    const xy = [
      (width / columns) * column,
      (heights[column] += height / 2) - height / 2,
    ]
    return {
      ...child,
      index,
      xy,
      columns,
      width: width / columns,
      height: height / 2,
    }
  })

  const transitions = useTransition(gridItems, fp.get('id'), {
    from: ({ xy, width, height }) => ({ xy, width, height }),
    enter: ({ xy, width, height }) => ({ xy, width, height }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

  return (
    <>
      <PhotographySectionHeader datetime={datetime} href={slug} />
      <Box
        ref={ref}
        // {...bind}
        className="mb4 w-100"
        // Define height in `style` to avoid creating a new className on each
        // resize / render.
        style={{ height: Math.max(...heights) }}
      >
        {width != null &&
          transitions.map(
            // @ts-ignore
            ({ item, props: { xy, width, height, ...rest }, key }) => {
              return (
                <animated.div
                  key={key}
                  style={{
                    position: 'absolute',
                    width,
                    height,
                    transform: xy.interpolate(
                      (x: number, y: number) => `translate3d(${x}px,${y}px,0)`,
                    ),
                    ...rest,
                  }}
                >
                  <ImageZoomGridElement
                    image={item}
                    onClick={() => openLightbox(item.index)}
                  />
                </animated.div>
              )
            },
          )}
      </Box>
      <SeeMoreLink totalNumImages={totalNumImages} href={slug} />
      {isLightboxOpen && (
        <Lightbox
          enableZoom={false}
          mainSrc={lightboxSrc}
          nextSrc={nextImage}
          onCloseRequest={closeLightbox}
          onMoveNextRequest={incrementLightboxIndex}
          onMovePrevRequest={decrementLightboxIndex}
          prevSrc={prevImage}
        />
      )}
    </>
  )
}

export default PhotographyGridSection
