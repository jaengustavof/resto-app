"use server"

import { prisma } from "@/src/lib/prisma";
import { OrderSchema } from "@/src/schema"

export async function createorder(data: unknown) {
    const result = OrderSchema.safeParse(data);

    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    try {
        await prisma.order.create({
            data: {
                name: result.data.name,
                total: result.data.total,
                status: false,
                orderProducts: {
                    create: result.data.order.map(product => ({
                        productId: product.id,
                        quantity: product.quantity
                    }))
                }

            }
            
        })
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}