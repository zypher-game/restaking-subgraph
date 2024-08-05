import { BigInt } from '@graphprotocol/graph-ts'

import { User, Token, Asset } from '../../generated/schema'

export function increaseAsset(
  user: User,
  token: Token,
  amount: BigInt
): Asset {
  const asset = touchAsset(user, token)

  asset.balance = asset.balance.plus(amount)
  asset.save()

  return asset
}

export function decreaseAsset(
  user: User,
  token: Token,
  amount: BigInt
): Asset {
  const asset = touchAsset(user, token)

  asset.balance = asset.balance.minus(amount)
  asset.save()

  return asset
}

export function touchAsset(
  user: User,
  token: Token
): Asset {
  const asset = Asset.load(assetId(user, token))
  return asset ? asset : newAsset(user, token)
}

export function newAsset(
  user: User,
  token: Token
): Asset {
  const asset = new Asset(assetId(user, token))
  asset.owner = user.id
  asset.token = token.id
  asset.balance = BigInt.fromI32(0)
  asset.save()

  return asset
}

export function assetId(
  user: User,
  token: Token
): string {
  return `${user.id.toHexString()}:${token.id.toHexString()}`
}
