import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" {...props}>
      <Path data-name="Ret\xE2ngulo 118" fill="none" d="M0 0H16V16H0z" />
      <Path
        data-name="Caminho 49"
        d="M7 8a2 2 0 11-2 2 2.006 2.006 0 012-2zm0-6a2.006 2.006 0 00-2 2h4a2.006 2.006 0 00-2-2zm5 14H2a2.006 2.006 0 01-2-2V6a2.006 2.006 0 012-2h1a4 4 0 018 0h1a2.006 2.006 0 012 2v8a2.006 2.006 0 01-2 2z"
        transform="translate(1)"
        fill="#498fcc"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
