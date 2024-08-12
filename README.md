# Restaking Subgraph

Self hosted graph-node deploy script:

```bash
$ yarn deploy:linea:mainnet -l v0.0.1

# $ graph deploy restaking/public subgraph.yaml --node https://linea-mainnet-graph.zypher.game/jsonrpc --network linea --network-file=networks.mainnet.json --ipfs https://linea-mainnet-graph.zypher.game -l v0.0.1
#   Reading networks config
#   Skip 'ZypherRestaking': No changes to network configuration
#   Skip 'ChainlinkDataFeed': No changes to network configuration
#   dataSource 'Multicall3' from 'networks.mainnet.json' not found in subgraph.yaml
# ✔ Update sources network
#   Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
#   Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
#   Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
#   Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
#   Skip migration: Bump mapping apiVersion from 0.0.5 to 0.0.6
#   Skip migration: Bump manifest specVersion from 0.0.1 to 0.0.2
#   Skip migration: Bump manifest specVersion from 0.0.2 to 0.0.4
# ✔ Apply migrations
# ✔ Load subgraph from subgraph.yaml
#   Compile data source: ZypherRestaking => build/ZypherRestaking/ZypherRestaking.wasm
#   Compile data source: ChainlinkDataFeed => build/ZypherRestaking/ZypherRestaking.wasm (already compiled)
# ✔ Compile subgraph
#   Copy schema file build/schema.graphql
#   Write subgraph file build/ZypherRestaking/Restaking.json
#   Write subgraph file build/ZypherRestaking/ERC20.json
#   Write subgraph file build/ChainlinkDataFeed/ChainlinkDataFeed.json
#   Write subgraph manifest build/subgraph.yaml
# ✔ Write compiled subgraph to build/
#   Add file to IPFS build/schema.graphql
#                 .. QmVxqFCwFktYYwjF44CQB2Ji6CBr9u71y4mC7T5rkrCaDu
#   Add file to IPFS build/ZypherRestaking/Restaking.json
#                 .. QmbBCRAVZH1QDYGLamYf147a4pzyoHC1sEdkfoCBjgvChv
#   Add file to IPFS build/ZypherRestaking/ERC20.json
#                 .. QmYWgUTghCu1w8ujdjVB59vV8BNXxvvfpJi5yE1qrJUuBY
#   Add file to IPFS build/ChainlinkDataFeed/ChainlinkDataFeed.json
#                 .. QmYgzM3RNMYYmRw9o1XrEcJpUuiKVZkfaARFkioPJdpugU
#   Add file to IPFS build/ZypherRestaking/ZypherRestaking.wasm
#                 .. QmZ8FRwB3dgsEkj5dY6p8dkxpG6LtGdUFQdvyn9eSYx6gv
#   Add file to IPFS build/ZypherRestaking/ZypherRestaking.wasm
#                 .. QmZ8FRwB3dgsEkj5dY6p8dkxpG6LtGdUFQdvyn9eSYx6gv (already uploaded)
# ✔ Upload subgraph to IPFS
#
# Build completed: QmWYAJYZSGUCVZW9WwameE4jXQyw57NtKnVd2xEvpkYRsd
#
# Deployed to https://linea-mainnet-graph.zypher.game:8000/subgraphs/name/restaking/public/graphql
#
# Subgraph endpoints:
# Queries (HTTP):     https://linea-mainnet-graph.zypher.game:8000/subgraphs/name/restaking/public
#
# ✨  Done in 8.44s.
```

Goldsky deploy script:

```bash
$ goldsky subgraph deploy zypher-restaking/linea-mainnet                                                                                                                           [16:30:59]

# Deploying Subgraph:
# ✔ Validating build path
# ✔ Packaging deployment bundle from /Users/chris/repo/zypher-game/restaking-subgraph/build
# ✔ Deploying zypher-restaking/linea-mainnet to Goldsky
#
# Deployed subgraph API: https://api.goldsky.com/api/public/project_clzbcvp9w9t5k011f7hbvc17s/subgraphs/zypher-restaking/linea-mainnet/gn

```
