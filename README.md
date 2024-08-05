# Restaking Subgraph

![Linea Sepolia Subgraph](https://img.shields.io/badge/zypher/restaking-blue?label=linea-sepolia&logo=graphql)

> [!NOTE]
>
> 因為我們要參與 [Linea Surge](https://app.openblocklabs.com/app/linea/dashboard)，所以需要要提供 [hourly TVL script](https://github.com/delta-hq/l2-lxp-liquidity-reward)，
> 這邊官方建議的手法是透過 [Goldsky 上傳 subgraph](https://docs.goldsky.com/subgraphs/guides/create-a-no-code-subgraph) 並查詢。
>
> 但很不幸的，目前我們只剩 Linea Sepolia 版本的 Restaking，而 Goldsky 上的 `linea-testnet` 則是指向 Linea Goerli。
>
> 然後.... (省略三千字) .... 因此我只能自己寫一個版本的 subgraph deploy 到我們自己 host 的 graph-node 上

- Linea Sepolia:
  - [Live editor](https://linea-sepolia-graph.zypher.game/subgraphs/name/zypher/restaking/graphql)
  - [API endpoint](https://linea-sepolia-graph.zypher.game:8000/subgraphs/name/zypher/restaking)

## Example Query

```graphql
query Example {
  users(first: 1000, block: { number: 3240000 }) {
    id
    assets {
      token {
        id
        symbol
        decimals
      }
      balance
    }
  }
}
```

### Result

```json
{
  "data": {
    "users": [
      {
        "id": "0x2e1c9adc548963273d9e767413403719019bd639",
        "assets": [
          {
            "token": {
              "id": "0xaeb65ccde3b88ca9095d7cc1d8aca82ae865aca6",
              "symbol": "WETH",
              "decimals": 18
            },
            "balance": "1010000000000000000"
          }
        ]
      },
      {
        "id": "0xa9261e5c81f0c4c80bae79a645ef60eb78f5e698",
        "assets": [
          {
            "token": {
              "id": "0xaeb65ccde3b88ca9095d7cc1d8aca82ae865aca6",
              "symbol": "WETH",
              "decimals": 18
            },
            "balance": "10000000000000000"
          },
          {
            "token": {
              "id": "0xd9c4d0bf3881510d9d7a883c94bd856c4d314370",
              "symbol": "wstETH",
              "decimals": 18
            },
            "balance": "1000000000000000000"
          }
        ]
      }
    ]
  }
}
```
