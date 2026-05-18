"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StakePage() {
  const [amount, setAmount] = useState("");

  return (
    <div className="container max-w-md py-6">
      <Card>
        <CardHeader>
          <CardTitle>Stake KITE → lsKITE</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">KITE Amount</label>
            <Input
              type="number"
              placeholder="0.0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="text-sm text-muted-foreground">
            Exchange Rate: 1 KITE = 1.00 lsKITE
          </div>
          <Button className="w-full" disabled>
            Connect Wallet
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
