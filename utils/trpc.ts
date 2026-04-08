import { createTRPCClient } from '@trpc/client';
import type { AppRouter } from '../server/routers/_app';

export const trpc = createTRPCClient<AppRouter>({ url: '/api/trpc' });