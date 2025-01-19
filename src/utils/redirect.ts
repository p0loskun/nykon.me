import { redirects } from "@configs/redirects";

/**
 * Returns the final URL for a given key from the redirect map.
 *
 * @param key - A key representing a redirect in the `redirectMap`.
 * @returns The final URL (href) associated with the key.
 * @throws {Error} If the key does not exist in the map.
 */
export default function redirect(key: keyof typeof redirects): string {
  const redirect = redirects[key];

  if (!redirect) {
    throw new Error(
      `[redirect] Missing redirect for key "${key}" in "@/config/redirects".`,
    );
  }

  return redirect.href;
}
