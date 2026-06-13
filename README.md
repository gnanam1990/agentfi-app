# AgentFi

> A DeFi workspace UI for swaps, liquidity pools, staking, and yield routes on the Kite network.

## Overview

AgentFi is a Next.js web application that provides the interface for a DeFi
workspace targeting the Kite network: token swaps, liquidity pools, KITE
liquid staking (lsKITE), and yield strategies. The current codebase is a
front-end scaffold — the screens, navigation, and chain configuration are in
place, while the on-chain transaction logic and supporting smart contracts are
not yet implemented.

## Features

- Home dashboard with TVL / volume / pool metrics (placeholder values) and quick links to each workspace.
- Swap screen for KITE / USDC token pairs (UI only — quoting and execution not wired up).
- Liquidity pools browser and a "create pool" form (UI only).
- Staking screen for KITE → lsKITE (UI only).
- Yield strategies screen (empty-state placeholder).
- Kite chain definition and wagmi config prepared for wallet connectivity.

> Note: action buttons across the swap, stake, and pool screens are currently
> disabled placeholders ("Connect Wallet"). The wagmi configuration exists but
> is not yet mounted in the app, so wallet connection and on-chain calls are
> not active.

## Tech stack

- **Next.js 16** (App Router) with **React 19**
- **TypeScript**
- **Tailwind CSS 4** with shadcn/ui and Base UI components
- **wagmi** and **viem** for EVM chain config and (future) wallet/contract interaction
- **TanStack React Query**
- **lucide-react** icons

## Architecture

This is a monorepo with two top-level areas:

- `web/` — the Next.js front-end application (all current functionality).
- `contracts/` — placeholder directory intended for the protocol's smart contracts (currently empty; no contracts are implemented).

## Getting started

### Prerequisites

- Node.js 20+
- pnpm (a `pnpm-lock.yaml` is committed)

### Installation

```bash
cd web
pnpm install
```

### Configuration

No environment variables are required to run the app in its current state — the
front end does not read any `.env` configuration. The target chain is defined
in `web/lib/wagmi.ts` (Kite, chain ID `2366`, RPC `https://rpc.gokite.ai`).

### Running

```bash
cd web
pnpm dev      # start the dev server (http://localhost:3000)
pnpm build    # production build
pnpm start    # serve the production build
pnpm lint     # run ESLint
```

## Project structure

```
.
├── contracts/        # placeholder for smart contracts (empty)
└── web/              # Next.js application
    ├── app/          # App Router routes
    │   ├── page.tsx          # home dashboard
    │   ├── swap/             # swap screen
    │   ├── pools/            # pools browser + pools/new (create pool)
    │   ├── stake/            # KITE → lsKITE staking screen
    │   └── yield/            # yield strategies screen
    ├── components/ui/        # shadcn/ui components
    └── lib/                  # utils and wagmi/chain config
```

## Status

Early-stage preview / front-end scaffold. The UI, routing, and chain
configuration are in place, but core flows are not functional yet:

- Swap, stake, add/remove liquidity, and yield actions are UI-only; buttons are
  disabled placeholders and no transactions are sent.
- Wallet connection is not active (wagmi config is present but not mounted).
- No smart contracts are implemented (`contracts/` is empty).
- No deployed contract addresses are committed to the repository.

## License

No license specified.
