import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" {...props}>
      <Path
        d="M0 16v-2c0-2.2 3.6-4 8-4s8 1.8 8 4v2zM4 4a4 4 0 114 4 4 4 0 01-4-4z"
        fill="#498fcc"
      />
    </Svg>
  );
}

export default SvgComponent;
