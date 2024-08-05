import { BigInt } from '@graphprotocol/graph-ts'

/** @dev Unix timestamp (sec, BigInt) => YYYY-MM-DD hh:mm:ss */
export function dateOf(timestamp: BigInt): string {
  return new Date(timestamp.toI64() * 1000)
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ')
}
