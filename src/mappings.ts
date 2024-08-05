import {
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent,
} from '../generated/ZypherRestaking/Restaking'

import {
  newDeposit,
  newWithdraw,
  touchUser,
  touchToken,
  increaseAsset,
  decreaseAsset,
} from './entities'

/**
 * @dev
 *   event Deposit(
 *     address indexed user,
 *     address indexed token,
 *     uint256 amount,
 *     uint256 weekly
 *   );
 */
export function handleDeposit(event: DepositEvent): void {
  const user = touchUser(event.params.user)
  const token = touchToken(event.params.token)
  const amount = event.params.amount

  newDeposit(
    event.transaction.hash,
    user,
    token,
    amount,
    event.block.timestamp
  )
  increaseAsset(user, token, amount)
}

/**
 * @dev
 *   event Withdraw(
 *     address indexed user,
 *     address indexed token,
 *     uint256 amount
 *   );
 */
export function handleWithdraw(event: WithdrawEvent): void {
  const user = touchUser(event.params.user)
  const token = touchToken(event.params.token)
  const amount = event.params.amount

  newWithdraw(
    event.transaction.hash,
    user,
    token,
    amount,
    event.block.timestamp
  )
  decreaseAsset(user, token, amount)
}
