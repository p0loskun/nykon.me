/**
 * Check if the user agent is a mobile device
 *
 * @param userAgent The user agent to check
 */
export default function isOnMobile(userAgent: string): boolean {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
}
