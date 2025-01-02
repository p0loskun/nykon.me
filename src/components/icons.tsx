import * as React from "react";
import { ReactElement } from "react";

import { IconSvgProps } from "@/src/types";

export function HomeIcon({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps): ReactElement {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M18.5,24H5.5c-3.032,0-5.5-2.468-5.5-5.5V9.886c0-1.83,.906-3.534,2.424-4.559L8.924,.941c1.867-1.262,4.284-1.262,6.153,0l6.499,4.386c1.518,1.024,2.424,2.729,2.424,4.559v8.614c0,3.032-2.468,5.5-5.5,5.5ZM12,2.997c-.486,0-.974,.144-1.397,.431L4.102,7.813c-.689,.466-1.102,1.24-1.102,2.072v8.614c0,1.379,1.121,2.5,2.5,2.5h13c1.379,0,2.5-1.121,2.5-2.5V9.886c0-.832-.412-1.606-1.102-2.072L13.398,3.428c-.425-.287-.912-.431-1.398-.431Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WorkIcon({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps): ReactElement {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM11,2h2a3,3,0,0,1,2.816,2H8.184A3,3,0,0,1,11,2ZM5,6H19a3,3,0,0,1,3,3v3H2V9A3,3,0,0,1,5,6ZM19,22H5a3,3,0,0,1-3-3V14h9v1a1,1,0,0,0,2,0V14h9v5A3,3,0,0,1,19,22Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BlogIcon({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps): ReactElement {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M22.2,2.163a4.992,4.992,0,0,0-4.1-1.081l-3.822.694A4,4,0,0,0,12,3.065,4,4,0,0,0,9.716,1.776L5.9,1.082A5,5,0,0,0,0,6V16.793a5,5,0,0,0,4.105,4.919l6.286,1.143a9,9,0,0,0,3.218,0L19.9,21.712A5,5,0,0,0,24,16.793V6A4.983,4.983,0,0,0,22.2,2.163ZM11,20.928c-.084-.012-.168-.026-.252-.041L4.463,19.745A3,3,0,0,1,2,16.793V6A3,3,0,0,1,5,3a3.081,3.081,0,0,1,.54.049l3.82.7A2,2,0,0,1,11,5.712Zm11-4.135a3,3,0,0,1-2.463,2.952l-6.285,1.142c-.084.015-.168.029-.252.041V5.712a2,2,0,0,1,1.642-1.968l3.821-.7A3,3,0,0,1,22,6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GalleryIcon({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps): ReactElement {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM5,2H19a3,3,0,0,1,3,3V19a2.951,2.951,0,0,1-.3,1.285l-9.163-9.163a5,5,0,0,0-7.072,0L2,14.586V5A3,3,0,0,1,5,2ZM5,22a3,3,0,0,1-3-3V17.414l4.878-4.878a3,3,0,0,1,4.244,0L20.285,21.7A2.951,2.951,0,0,1,19,22Z"
        fill="currentColor"
      />
      <path
        d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DiscordIcon({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps): ReactElement {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TwitterIcon({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps): ReactElement {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GitHubIcon({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps): ReactElement {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function MoonIcon({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps): ReactElement {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SunIcon({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps): ReactElement {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
}

/**
 * Map of icon names to their respective SVG components.
 * <p>
 * This map is used by the {@link Icon} component to render the SVG icon based
 * on the name.
 * </p>
 */
export const iconMap = new Map<string, (props: IconSvgProps) => ReactElement>([
  ["home", HomeIcon],
  ["work", WorkIcon],
  ["blog", BlogIcon],
  ["gallery", GalleryIcon],
  ["discord", DiscordIcon],
  ["twitter", TwitterIcon],
  ["github", GitHubIcon],
  ["moon", MoonIcon],
  ["sun", SunIcon],
]);

/**
 * Icon component to render SVG icons.
 * <p>
 * This component uses the {@link iconMap} to render the SVG icon based on the
 * name.
 * If the icon name is not found in the map, it will render an empty div.
 * </p>
 *
 * @param name   Icon name, to be used as a key in iconMap
 * @param size   Icon size (default: 24)
 * @param width  Icon width
 * @param height Icon height
 * @param props  Additional props
 * @constructor ReactElement
 */
export const Icon = ({
  name,
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps & { name: string }): ReactElement => {
  const IconComponent = iconMap.get(name);

  return IconComponent ? (
    <IconComponent height={height} size={size} width={width} {...props} />
  ) : (
    <div />
  );
};
