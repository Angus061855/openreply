import { describe, it, expect, vi, afterEach } from 'vitest';
import { NextRequest } from 'next/server';
vi.mock('@/lib/ops/refresh-tokens', () => ({ refreshTokensAndUsage: vi.fn().mockResolvedValue({totalProcessed: 0, results: []}) }));
import { GET } from '@/app/api/cron/refresh-tokens/route';
import { refreshTokensAndUsage } from '@/lib/ops/refresh-tokens';
afterEach(() => { vi.unstubAllEnvs(); vi.clearAllMocks(); });
describe('token maintenance authorization', () => {
  it('rejects missing configuration even with Bearer undefined', async () => {
    vi.stubEnv('CRON_SECRET', ''); vi.stubEnv('NEXTAUTH_SECRET', '');
    expect((await GET(new NextRequest('https://example.com/api/cron/refresh-tokens', {headers:{authorization:'Bearer undefined'}}))).status).toBe(401);
    expect(refreshTokensAndUsage).not.toHaveBeenCalled();
  });
  it('rejects incorrect secret and runs maintenance for correct secret', async () => {
    vi.stubEnv('CRON_SECRET','test-only-secret');
    expect((await GET(new NextRequest('https://example.com/api/cron/refresh-tokens'))).status).toBe(401);
    const result=await GET(new NextRequest('https://example.com/api/cron/refresh-tokens',{headers:{authorization:'Bearer test-only-secret'}}));
    expect(result.status).toBe(200);
    expect(refreshTokensAndUsage).toHaveBeenCalledTimes(1);
  });
});
