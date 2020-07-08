import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={140.087}
      height={110.444}
      viewBox="0 0 119.087 84.444"
      {...props}
    >
      <G fill="#eb2121">
        <Path
          data-name="Caminho 3724"
          d="M2273.742 287.3l33.458 83.81s21.023 2.624 32.219-2.842 12.474-14.767 12.565-19.021c.125-5.875-.514-13.616-9.3-20.21-7.088-5.321-14-5.69-20.9-13.894a12.745 12.745 0 01-3.795-8.1c-.4-3.83 1.726-10.182 3.239-12.038 3.948-4.851 10.881-7.714 10.881-7.714z"
          transform="translate(-2232.913 -287.295)"
        />
        <Path
          data-name="Caminho 3726"
          d="M2251.572 341.775l-8.723 21.749h58.195l-8.723-21.749z"
          transform="translate(-2242.849 -279.08)"
        />
        <Path
          data-name="Caminho 3725"
          d="M2269.246 298.768l16.007 42.828h-31.561z"
          transform="translate(-2239.843 -288.899)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
