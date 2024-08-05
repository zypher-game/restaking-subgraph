import { Address } from '@graphprotocol/graph-ts'

import { Token } from '../../generated/schema'
import { ERC20 } from '../../generated/ZypherRestaking/ERC20'

export function touchToken(address: Address): Token {
  const token = Token.load(address)
  return token ? token : newToken(address)
}

export function newToken(address: Address): Token {
  const erc20 = ERC20.bind(address)

  const name = erc20.try_name()
  const symbol = erc20.try_symbol()
  const decimals = erc20.try_decimals()

  const token = new Token(address)
  token.name = name.reverted ? '' : name.value
  token.symbol = symbol.reverted ? '' : symbol.value
  token.decimals = decimals.reverted ? 0 : decimals.value

  token.save()
  return token
}

export default touchToken
