import { BigInt, Bytes } from '@graphprotocol/graph-ts'

import { Withdraw, User, Token } from '../../generated/schema'
import { dateOf } from '../utils'

export function newWithdraw(
  tx: Bytes,
  user: User,
  token: Token,
  amount: BigInt,
  timestamp: BigInt
): Withdraw {
  const wd = new Withdraw(tx)
  wd.user = user.id
  wd.token = token.id
  wd.amount = amount
  wd.timestamp = dateOf(timestamp)
  wd.save()

  return wd
}

export default newWithdraw
