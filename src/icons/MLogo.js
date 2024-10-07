import React from "react";

const Logo = ({
  width = 80,
  height = 80,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_60)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M119 182C77.6 182 44 148.4 44 107C44 65.6 77.6 32 119 32C160.4 32 194 65.6 194 107C194 148.4 160.4 182 119 182Z"
          fill="#DD1405"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M156.5 129.831C156.5 131.05 155.516 131.998 154.297 131.998H144.828C143.609 131.998 142.625 131.05 142.625 129.831V101.529C142.625 101.258 142.297 101.168 142.156 101.303L122.141 120.804C120.406 122.519 117.594 122.519 115.859 120.804L95.8438 101.303C95.7031 101.168 95.375 101.258 95.375 101.529V129.831C95.375 131.05 94.3906 131.998 93.1719 131.998H83.7031C82.4844 131.998 81.5 131.05 81.5 129.831V79.9977C81.5 78.7789 82.4844 77.8311 83.7031 77.8311H90.2188C91.3906 77.8311 92.5156 78.2824 93.3594 79.0949L118.203 103.335C118.625 103.741 119.375 103.741 119.797 103.335L144.641 79.0949C145.484 78.2824 146.609 77.8311 147.781 77.8311H154.297C155.516 77.8311 156.5 78.7789 156.5 79.9977V129.831Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_0_60"
          x="0"
          y="0"
          width="238"
          height="238"
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
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="22" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.893262 0 0 0 0 0.290728 0 0 0 0 0.245763 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_60"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_60"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;
