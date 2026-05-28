import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { label: "Total TVL", value: "$0", helper: "Preview pools" },
  { label: "24h Volume", value: "$0", helper: "Kite testnet routes" },
  { label: "Active Pools", value: "0", helper: "Open for first pool" },
];

const actions = [
  { title: "Swap", href: "/swap", description: "Quote KITE and USDC.e routes" },
  { title: "Pools", href: "/pools", description: "Create and inspect liquidity" },
  { title: "Stake", href: "/stake", description: "Stake KITE into lsKITE" },
  { title: "Yield", href: "/yield", description: "Track strategy candidates" },
];

export default function HomePage() {
  return (
    <main className="kite-gradient min-h-screen">
      <div className="container max-w-screen-2xl space-y-8 px-4 py-6">
        <div className="flex flex-col gap-5 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase text-muted-foreground">
              Kite Mainnet DeFi
            </p>
            <h1 className="text-4xl font-bold">AgentFi</h1>
            <p className="text-lg text-muted-foreground">
              A focused DeFi workspace for agent swaps, liquidity pools, staking,
              and yield routes on Kite Mainnet.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/swap"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Swap
            </Link>
            <Link
              href="/pools"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              Pools
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <Card key={metric.label} className="border-border/80 bg-card/85 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">
                  {metric.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-mono text-2xl font-bold">{metric.value}</div>
                <p className="mt-1 text-xs text-muted-foreground">{metric.helper}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {actions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Card className="h-full cursor-pointer border-border/80 bg-card/85 shadow-sm transition-colors hover:bg-accent">
                <CardHeader>
                  <CardTitle>{action.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {action.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
