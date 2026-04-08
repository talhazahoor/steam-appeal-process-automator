import { createHTTPHandler } from '@trpc/server/adapters/standalone';
import { appRouter } from './routers/_app';

export const handler = createHTTPHandler({
  router: appRouter,
  createContext: () => null,
});