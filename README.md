```
$ yarn feed:deploy                                                                                                                                                                          [15:45:59]
yarn run v1.22.22
$ graph deploy restaking/dev subgraph.datafeed.yaml --node https://linea-mainnet-graph.zypher.game/jsonrpc --network linea --network-file=networks.mainnet.json --ipfs https://linea-mainnet-graph.zypher.game
Which version label to use? (e.g. "v0.0.1"): v0.0.1
  Reading networks config
  Update 'ChainlinkDataFeed' network configuration
✔ Update sources network
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping apiVersion from 0.0.5 to 0.0.6
  Skip migration: Bump manifest specVersion from 0.0.1 to 0.0.2
  Skip migration: Bump manifest specVersion from 0.0.2 to 0.0.4
✔ Apply migrations
✔ Load subgraph from subgraph.datafeed.yaml
  Compile data source: ChainlinkDataFeed => build/ChainlinkDataFeed/ChainlinkDataFeed.wasm
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/ChainlinkDataFeed/ChainlinkDataFeed.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmVxqFCwFktYYwjF44CQB2Ji6CBr9u71y4mC7T5rkrCaDu
  Add file to IPFS build/ChainlinkDataFeed/ChainlinkDataFeed.json
                .. QmYgzM3RNMYYmRw9o1XrEcJpUuiKVZkfaARFkioPJdpugU
  Add file to IPFS build/ChainlinkDataFeed/ChainlinkDataFeed.wasm
                .. QmSzi71nMZVk5XAXx55cg6gNYcN2DznTrqqJS4Wta2CSpS
✔ Upload subgraph to IPFS

Build completed: Qmf6pgosV5msRUAc3AsfooqMoutQAFCpYB8PiWaSBBfjxh

Deployed to https://linea-mainnet-graph.zypher.game:8000/subgraphs/name/restaking/dev/graphql

Subgraph endpoints:
Queries (HTTP):     https://linea-mainnet-graph.zypher.game:8000/subgraphs/name/restaking/dev

✨  Done in 11.72s.
```
