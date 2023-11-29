import React from "react";

function MessengerIcon(props) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1045_132)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54.63 28.01C39.92 28.01 28 39.05 28 52.67C28 60.43 31.87 67.35 37.93 71.87V81.27L47 76.29C49.42 76.96 51.98 77.32 54.64 77.32C69.35 77.32 81.27 66.28 81.27 52.66C81.27 39.04 69.34 28 54.64 28L54.63 28.01ZM57.28 61.22L50.5 53.99L37.27 61.22L51.83 45.77L58.78 53L71.85 45.77L57.29 61.22H57.28Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1045_132"
          x="0"
          y="0"
          width="113.273"
          height="113.27"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1045_132"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1045_132"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default MessengerIcon;
