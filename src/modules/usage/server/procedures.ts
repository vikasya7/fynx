import { getUsageStaus } from "@/lib/usage";
import { createTRPCRouter,protectedProcedure } from "@/trpc/init";

export const usageRouter = createTRPCRouter({
    status: protectedProcedure.query(async () =>{
        try{
            const result= await getUsageStaus();
            return result;
        } catch{
          return null;
        }
    }),
});