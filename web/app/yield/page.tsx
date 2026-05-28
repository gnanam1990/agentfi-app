import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Yield — AgentFi",
};

export default function YieldPage() {
  return (
    <main className="kite-gradient min-h-screen">
      <div className="container max-w-screen-2xl space-y-6 px-4 py-6">
        <h1 className="text-3xl font-bold">Yield Strategies</h1>
        <Card className="border-border/80 bg-card/90 shadow-sm">
          <CardContent className="py-8 text-center text-muted-foreground">
            No yield strategies available yet.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
