# Restaking Subgraph

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
