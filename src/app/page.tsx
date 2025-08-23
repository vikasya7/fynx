

import { caller, getQueryClient ,trpc} from '@/trpc/server';
import { dehydrate, HydrationBoundary, useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react'
import { Client } from './client';

const page =async () => {
 const queryClient=getQueryClient();
 void queryClient.prefetchQuery(trpc.createAI.queryOptions({text:"VIKAS PREFETCH"}))

  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>} >
    <Client/>
    </Suspense>
    </HydrationBoundary>
  )
}

export default page