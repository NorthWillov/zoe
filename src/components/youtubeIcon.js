import React from "react";

function YoutubeIcon(props) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 88 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1045_134)">
        <path
          d="M60.4029 11.445C51.6932 10.8505 32.2947 10.8529 23.5971 11.445C14.1793 12.0878 13.0701 17.7766 13 32.7503C13.0701 47.6974 14.1697 53.4104 23.5971 54.0556C32.2971 54.6477 51.6932 54.6501 60.4029 54.0556C69.8207 53.4128 70.9299 47.724 71 32.7503C70.9299 17.8032 69.8303 12.0902 60.4029 11.445ZM34.75 42.417V23.0836L54.0833 32.7334L34.75 42.417Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1045_134"
          x="0"
          y="0"
          width="88"
          height="73.501"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="4" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1045_134"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1045_134"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default YoutubeIcon;
