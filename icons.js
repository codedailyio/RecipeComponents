import React from "react";
import Svg, { G, Path, Circle, Rect } from "react-native-svg";

export const Clock = (props) => {
  return (
    <Svg width="26px" height="28px" viewBox="0 0 26 28" {...props}>
      <G
        transform="translate(-247 -922) translate(202 878) translate(40 40)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <Path d="M0 0L36 0 36 36 0 36z" />
        <Circle
          stroke="#111127"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          cx={18}
          cy={19.5}
          r={10.5}
        />
        <Path
          stroke="#111127"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 15L18 19.5 21 19.5"
        />
        <Path
          d="M10.5 6L6.375 9M25.5 6l4.125 3"
          stroke="#111127"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export const Serving = (props) => {
  return (
    <Svg width="25px" height="25px" viewBox="0 0 25 25" {...props}>
      <G
        transform="translate(-377 -924) translate(202 878) translate(173 43)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <Path d="M0 0L30 0 30 30 0 30z" />
        <Path
          d="M12.5 4A11.25 11.25 0 1026 17.5c0-.69-.56-1.25-1.25-1.25h-8.5a2.5 2.5 0 01-2.5-2.5V5a1.125 1.125 0 00-1.25-1"
          stroke="#111127"
          strokeWidth={1.875}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.75 4.375a11.25 11.25 0 016.875 6.875H20c-.69 0-1.25-.56-1.25-1.25V4.375"
          stroke="#111127"
          strokeWidth={1.875}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export const Calories = (props) => {
  return (
    <Svg width="26px" height="24px" viewBox="0 0 26 24" {...props}>
      <G
        transform="translate(-531 -924) translate(202 878) translate(326 42)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <Path d="M0 0L32 0 32 32 0 32z" />
        <Rect
          stroke="#111127"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          x={4}
          y={16}
          width={8}
          height={10.6666667}
          rx={1.33333333}
        />
        <Rect
          stroke="#111127"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          x={12}
          y={10.6666667}
          width={8}
          height={16}
          rx={1.33333333}
        />
        <Rect
          stroke="#111127"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          x={20}
          y={5.33333333}
          width={8}
          height={21.3333333}
          rx={1.33333333}
        />
        <Path
          d="M5.333 26.667H24"
          stroke="#202842"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
