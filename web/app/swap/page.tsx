"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SwapPage() {
  const [tokenIn, setTokenIn] = useState("KITE");
  const [amountIn, setAmountIn] = useState("");
  const [amountOut] = useState("");

  return (
    <main className="kite-gradient min-h-screen">
      <div className="container max-w-md px-4 py-6">
        <Card className="border-border/80 bg-card/90 shadow-sm">
          <CardHeader>
            <CardTitle>Swap</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">You pay</label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="0.0"
                  value={amountIn}
                  onChange={(e) => setAmountIn(e.target.value)}
                  className="flex-1"
                />
                <select
                  value={tokenIn}
                  onChange={(e) => setTokenIn(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option>KITE</option>
                  <option>USDC</option>
                </select>
              </div>
            </div>

            <div className="text-center text-muted-foreground">to</div>

            <div>
              <label className="text-sm text-muted-foreground">You receive</label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="0.0"
                  value={amountOut}
                  readOnly
                  className="flex-1"
                />
                <select
                  value={tokenIn === "KITE" ? "USDC" : "KITE"}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option>{tokenIn === "KITE" ? "USDC" : "KITE"}</option>
                </select>
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
