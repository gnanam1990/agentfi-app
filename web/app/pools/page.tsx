import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Pools — AgentFi",
};

export default function PoolsPage() {
  return (
    <div className="container max-w-screen-2xl py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Liquidity Pools</h1>
        <Link href="/pools/new">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">
            Create Pool
          </button>
        </Link>
      </div>

      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          No pools yet. Create the first liquidity pool.
        </CardContent>
      </Card>
    </div>
  );
}
