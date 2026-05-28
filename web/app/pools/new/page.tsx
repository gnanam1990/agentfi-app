import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Create Pool - AgentFi",
};

export default function NewPoolPage() {
  return (
    <main className="kite-gradient min-h-screen">
      <div className="container max-w-xl px-4 py-6">
        <Card className="border-border/80 bg-card/90 shadow-sm">
          <CardHeader>
            <CardTitle>Create Pool</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2 sm:grid-cols-2">
              <div>
                <label className="text-sm text-muted-foreground">Token A</label>
                <Input defaultValue="KITE" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Token B</label>
                <Input defaultValue="USDC.e" />
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div>
                <label className="text-sm text-muted-foreground">KITE amount</label>
                <Input type="number" placeholder="0.0" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">USDC.e amount</label>
                <Input type="number" placeholder="0.0" />
              </div>
            </div>
            <Button className="w-full" disabled>
              Connect Wallet
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
