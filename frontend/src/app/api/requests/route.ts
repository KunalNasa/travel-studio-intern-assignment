import { ApiResponse } from "@/lib/ApiResponse";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


/**
    * @param req
    * @returns table logs data if successfull
    * @returns error if database is unreachable.
 */

/**
 * This route is written only to test real data in production environment. 
 * Idealy this route belongs to the NestJS backend and data must be fetched 
 * from there. But, since we are not hosting our NestJS backend therefore it is 
 * written for simplicity.
 */
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest): Promise<any> {
    try {
        const requests = await prisma.requests.findMany({
            where: {
                status: "pending"
            }
        });

        const respone: ApiResponse<typeof requests> = {
            message: "All requests fetched from DB",
            data: requests
        }

        return NextResponse.json(respone, {
            status: 200, headers: {
                'Cache-Control': 'no-store',
            },
        });
    } catch (error: any) {
        console.log("Error fetching requests from db", error);
        // Vercel was caching this response and was not returning latests data from the DB, therefore added this cache-control to no-store. Now it's working fine.
        return NextResponse.json({
            success: false,
            message: "Internal Server Error"
        }, {
            status: 500, headers: {
                'Cache-Control': 'no-store',
            },
        });
    }
}