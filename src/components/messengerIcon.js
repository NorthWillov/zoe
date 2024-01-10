import React from "react";

function MessengerIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
    >
      <g filter="url(#filter0_d_1248_48)">
        <path
          d="M65 37C65 22.6406 53.3594 11 39 11C24.6406 11 13 22.6406 13 37C13 49.9772 22.5078 60.7336 34.9375 62.6841V44.5156H28.3359V37H34.9375V31.2719C34.9375 24.7556 38.8192 21.1563 44.7581 21.1563C47.6018 21.1563 50.5781 21.6641 50.5781 21.6641V28.0625H47.2997C44.07 28.0625 43.0625 30.0668 43.0625 32.125V37H50.2734L49.1207 44.5156H43.0625V62.6841C55.4922 60.7336 65 49.9772 65 37Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1248_48"
          x="0"
          y="0"
          width="82"
          height="81.6846"
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
            result="effect1_dropShadow_1248_48"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1248_48"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default MessengerIcon;
