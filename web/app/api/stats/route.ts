// Read-only stats for external dashboards.
//
// Response shape when live data exists:
//   { tvl, pools, source, as_of }
// Otherwise HTTP 503:
//   { error: "no live data source", reason }
//
// AgentFi does not yet have a live data source: no Pool / PoolFactory / lsKITE
// contract addresses are deployed or committed, and the app calls no backend
// API. The home page TVL / pool figures are static placeholders, so they are
// deliberately not reused here. Once a factory address exists, read
// `tvl` and `pools` from it via viem against `kiteChain` (lib/wagmi.ts).

const CACHE_CONTROL = "public, s-maxage=300, stale-while-revalidate=600";

export async function GET() {
  return Response.json(
    {
      error: "no live data source",
      reason:
        "AgentFi has no deployed contracts on Kite Mainnet (chain 2366) and no backend API; TVL and pool count cannot be read from real data yet.",
    },
    { status: 503, headers: { "Cache-Control": CACHE_CONTROL } },
  );
}
