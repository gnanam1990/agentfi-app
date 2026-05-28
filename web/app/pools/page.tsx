import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Pools — AgentFi",
};

export default function PoolsPage() {
  return (
    <main className="kite-gradient min-h-screen">
      <div className="container max-w-screen-2xl space-y-6 px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Liquidity Pools</h1>
          <Link
            href="/pools/new"
            className="inline-flex h-8 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Create Pool
          </Link>
        </div>

        <Card className="border-border/80 bg-card/90 shadow-sm">
          <CardContent className="py-8 text-center text-muted-foreground">
            No pools yet. Create the first liquidity pool.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
