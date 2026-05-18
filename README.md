# AgentFi

DeFi platform on Kite Mainnet: stablecoin DEX, LSD-KITE liquid staking, yield aggregator.

## Structure

- `contracts/` — Foundry smart contracts (AMM Pool, PoolFactory, Router)
- `web/` — Next.js 15 frontend with swap UI, pool browser, liquidity management

## Smart Contracts

- Pool.sol - AMM with constant product formula
- PoolFactory.sol - Factory for creating trading pairs
- Router.sol - Multi-hop swap router
- LpToken.sol - LP token for liquidity providers

## Frontend

- Swap UI with price quotes
- Pool browser
- Add/remove liquidity
- Wallet connect (wagmi)

## Development

```bash
# Contracts
cd contracts
forge build
forge test

# Frontend
cd web
pnpm install
pnpm dev
```
