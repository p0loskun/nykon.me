/**
 * Check if the user agent is a mobile device
 *
 * @param userAgent
 */
export default function isMobile(userAgent: string): boolean {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
}
