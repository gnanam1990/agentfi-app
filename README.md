# AgentFi

DeFi platform on Kite Mainnet: stablecoin DEX, LSD-KITE liquid staking, yield aggregator.

## Phase 1: DEX Core Smart Contracts

- AMM Pool with constant product formula
- PoolFactory for creating trading pairs
- Router for multi-hop swaps
- LP token management
- 0.3% swap fee

## Development

```bash
cd contracts
forge build
forge test
```

## Contracts

- `Pool.sol` - AMM pool with liquidity management
- `PoolFactory.sol` - Factory for creating pools
- `Router.sol` - Multi-hop swap router
- `LpToken.sol` - LP token for liquidity providers
