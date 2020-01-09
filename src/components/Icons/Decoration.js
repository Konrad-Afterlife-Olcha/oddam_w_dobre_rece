import React from "react";

function SvgDecoration(props) {
  return (
    <svg width={253} height={33} {...props}>
      <defs>
        <clipPath id="Decoration_svg__a">
          <path fill="none" d="M0 0h253v33H0z" />
        </clipPath>
      </defs>
      <g
        clipPath="url(#Decoration_svg__a)"
        fill="none"
        stroke="#1a1818"
        strokeLinecap="round"
        strokeMiterlimit={10}
      >
        <path
          d="M126.495 27.426l8.965-8.732-8.965-8.732-8.955 8.732 8.965 8.732"
          strokeWidth={1.788}
        />
        <path
          d="M126.495 18.712l8.965-8.732-8.965-8.732-8.955 8.732z"
          strokeWidth={1.788}
        />
        <path strokeWidth={1.811} d="M99.222 17.154H.906" />
        <path
          d="M154.236 17.162l-5.638 5.491-11.054-10.765 2.155-2.1 4.679 4.558-4.679 4.558-13.21-12.866-13.19 12.866-4.678-4.561 4.679-4.558 2.155 2.1-11.053 10.766-5.638-5.491"
          strokeWidth={1.788}
        />
        <path strokeWidth={1.811} d="M252.094 17.154h-98.316" />
        <path
          strokeWidth={1.788}
          d="M121.307 26.678l5.193-5.193 5.058 5.058-5.193 5.193z"
        />
        <path
          d="M158.362 21.965h-4.3l-5.428-5.287-9.673 9.422-12.464-12.14-12.464 12.14-9.673-9.422-5.428 5.287h-4.3"
          strokeWidth={1.788}
        />
      </g>
    </svg>
  );
}

export default SvgDecoration;
