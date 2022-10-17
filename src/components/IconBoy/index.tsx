import * as React from "react";
import { SVGProps } from "react";

// como foi feita essa maravilha https://react-svgr.com/playground/

const IconBoy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h32v32H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01111)" />
      </pattern>
      <image
        id="b"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default IconBoy;
