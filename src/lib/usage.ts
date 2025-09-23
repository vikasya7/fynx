import { RateLimiterPrisma } from "rate-limiter-flexible"
import { prisma } from "./db"
import { auth } from "@clerk/nextjs/server";

const FREE_POINTS = 2;
const PRO_POINTS = 40;
const DURATION = 30*24*60*60;
const GENERATION_COST=1;
export async function getUsageTracker() {

    const {has} =await auth();
    const hasProAccess=has({plan: "pro"});


    const usageTracker= new RateLimiterPrisma({
        storeClient: prisma,
        tableName: "Usage",
        points: hasProAccess ? PRO_POINTS : FREE_POINTS,
        duration: DURATION,
    })

    return usageTracker;
};

export async function consumeCredits() {
    const {userId} = await auth();

    if(!userId){
        throw new Error("User not authenticated");
    }

    const usageTracker= await getUsageTracker();
    const result=await usageTracker.consume(userId,GENERATION_COST);
    return result;
};

export async function getUsageStaus() {
    const {userId} = await auth();

    if(!userId){
        throw new Error("User not authenticated");
    }

    const usageTracker = await getUsageTracker();
    const result = await usageTracker.get(userId);
    return result;
};