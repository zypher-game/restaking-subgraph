import { Address } from '@graphprotocol/graph-ts'

import { User } from '../../generated/schema'

export function touchUser(address: Address): User {
  let user = User.load(address)
  if (!user) user = newUser(address)

  return user
}

export function newUser(address: Address): User {
  const user = new User(address)
  user.save()
  return user
}

export default touchUser
