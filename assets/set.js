import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Settings \u2013 2" clipPath="url(#a)">
        <Path data-name="Ret\xE2ngulo 193" fill="none" d="M0 0H16V16H0z" />
        <Path
          data-name="Caminho 104"
          d="M267.5 10a2 2 0 10-2-2 2.006 2.006 0 002 2zm-4.1-6.4a5.64 5.64 0 012.4-1.3l.8-2.3h2l.8 2.3a6.983 6.983 0 012.4 1.3l2.4-.5 1 1.8-1.6 1.8a5.7 5.7 0 01.1 1.3c0 .4-.1.9-.1 1.3l1.6 1.8-1 1.8-2.4-.5a5.64 5.64 0 01-2.4 1.3l-.8 2.3h-2l-.8-2.3a6.983 6.983 0 01-2.4-1.3l-2.4.5-1-1.8 1.6-1.8a5.7 5.7 0 01-.1-1.3c0-.4.1-.9.1-1.3L260 4.9l1-1.8z"
          transform="translate(-260)"
          fill="#fcfcfc"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
