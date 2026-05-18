import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="container max-w-screen-2xl py-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">AgentFi</h1>
        <p className="text-xl text-muted-foreground">
          DeFi platform on Kite Mainnet
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/swap">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md">
              Swap
            </button>
          </Link>
          <Link href="/pools">
            <button className="px-6 py-2 border border-border rounded-md">
              Pools
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Total TVL</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">24h Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Active Pools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
