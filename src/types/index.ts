import { SVGProps } from "react";

/**
 * Props for the SVG icon component.
 *
 * @param size Icon size, sets both width and height (default: 24)
 *
 * @see BaseIcon
 * @see Icon
 */
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
