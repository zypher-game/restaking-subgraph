import { BigInt, Bytes } from '@graphprotocol/graph-ts'

import { Deposit, User, Token } from '../../generated/schema'
import { dateOf } from '../utils'

export function newDeposit(
  tx: Bytes,
  user: User,
  token: Token,
  amount: BigInt,
  timestamp: BigInt
): Deposit {
  const dp = new Deposit(tx)
  dp.user = user.id
  dp.token = token.id
  dp.amount = amount
  dp.timestamp = dateOf(timestamp)
  dp.save()

  return dp
}

export default newDeposit
