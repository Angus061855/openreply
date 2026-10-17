import { NextRequest, NextResponse } from "next/server";
import { refreshTokensAndUsage } from "@/lib/ops/refresh-tokens";

export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET || process.env.NEXTAUTH_SECRET;
  if (!cronSecret || request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ success: true, data: await refreshTokensAndUsage() });
}
