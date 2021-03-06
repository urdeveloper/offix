/**
 * Types of the cache operations that can be generated by helper
 * Apollo will automatically detect and notify listeners for any edits.
 * However additional handling is needed in situation when:
 *
 * - We are creating new item and we need to point out queries that needs to be updated
 * - We are removing item and need to remove them from cached queries.
 *
 * As alternative users can rely on `refetchQueries` field but this approach is
 * discouraged by Apollo team as it will make extra request that is not needed.
 */
export enum CacheOperation {

  /**
   * Cache update that involves adding new item to the query.
   * Used by default
   */
  ADD = "add",
  /**
   * Cache update that involves notifying cache that  specific query is refreshed.
   * It can be applied for changes that perform updates on different objects etc.
   */
  REFRESH = "refresh",

  /**
   * Cache update that involves removing item from the query
   */
  DELETE = "delete"

}
