import { router } from '../trpc';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

export const appRouter = router({
  getAppealStatus: {
    input: z.object({
      steamId: z.string(),
    }),
    async resolve({ input }) {
      console.log('Get appeal status');
      return { status: 'pending' };
    },
  },
});

export default appRouter;