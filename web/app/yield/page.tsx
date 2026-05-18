import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Yield — AgentFi",
};

export default function YieldPage() {
  return (
    <div className="container max-w-screen-2xl py-6 space-y-6">
      <h1 className="text-3xl font-bold">Yield Strategies</h1>
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          No yield strategies available yet.
        </CardContent>
      </Card>
    </div>
  );
}
