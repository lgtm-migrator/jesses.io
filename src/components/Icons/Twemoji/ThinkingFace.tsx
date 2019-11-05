import React from 'react'

const ThinkingFace = props => (
  <svg viewBox="0 0 45 45" {...props}>
    <defs>
      <clipPath id="a">
        <path d="M0 36h36V0H0v36z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 45)">
      <path
        d="M1 18.982c0-9.39 7.611-17 17-17 9.39 0 17 7.61 17 17s-7.61 17-17 17c-9.389 0-17-7.61-17-17"
        fill="#ffcb4c"
      />
      <path
        d="M14.524 14.964a.914.914 0 0 0-.312.464.798.798 0 0 0 .589 1.02c4.529 1.023 7.577-1.361 7.706-1.463.384-.306.46-.845.174-1.206-.286-.358-.828-.401-1.211-.096-.111.083-2.524 1.923-6.182 1.097a.91.91 0 0 0-.764.184m.72 9.862c0-1.468-.952-2.656-2.125-2.656s-2.125 1.188-2.125 2.656c0 1.467.952 2.656 2.125 2.656s2.125-1.189 2.125-2.656M26.5 23.764c0-1.468-.95-2.656-2.125-2.656-1.173 0-2.125 1.188-2.125 2.656 0 1.467.952 2.656 2.125 2.656 1.175 0 2.125-1.19 2.125-2.656"
        fill="#65471b"
      />

      <path
        d="M17.276.85s1.265.412 1.43 1.353c.172.97-.625 1.167-.625 1.167s1.041.208 1.172 1.376c.123 1.1-.862 1.363-.862 1.363s.97.4 1.016 1.539c.038.959-.995 1.428-.995 1.428s5.038 1.22 5.555 1.34c.516.12 1.321.616 1.07 1.695-.249 1.08-1.204 1.118-1.698 1.003-.494-.116-6.744-1.567-8.9-2.07-.23-.052-1.308-.301-1.439-.333-.54-.127-.785.11-.405.512.51.536.833 1.129.947 2.113.12 1.036-.232 2.314-.433 2.809-.374.92-1.005 1.649-1.734 1.899-1.138.39-1.946-.321-1.542-1.561.604-1.855.21-3.375-.833-4.293-2.449-2.157-3.589-3.695-2.83-6.973.827-3.575 4.377-5.876 7.952-5.048l3.154.682"
        fill="#f19020"
      />

      <path
        d="M9.296 29.65a.917.917 0 0 0-.391.397.8.8 0 0 0 .393 1.113c4.266 1.83 7.699.043 7.843-.034.433-.23.608-.748.39-1.154-.215-.405-.74-.546-1.172-.318-.123.064-2.832 1.432-6.278-.047a.915.915 0 0 0-.785.042M21.43 25.9a.924.924 0 0 0-.361.423.8.8 0 0 0 .467 1.084c4.38 1.536 7.685-.48 7.824-.567.415-.26.554-.787.31-1.178-.241-.389-.775-.494-1.19-.238-.12.073-2.728 1.621-6.267.38a.916.916 0 0 0-.782.095"
        fill="#65471b"
      />
    </g>
  </svg>
)

export default ThinkingFace
