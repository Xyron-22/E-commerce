import { NextResponse } from "next/server";
import { headers } from "next/headers";

import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(request) {
   
    const headersList = headers();

    const res = await request.json();

    const redirectUrl = headersList.get("origin");

try {
        const params = {
            submit_type: "pay",
            mode: "payment",
            payment_method_types: ["card"],
            billing_address_collection: "auto",
            shipping_options: [
                { shipping_rate: process.env.NEXT_PUBLIC_SHIP_1},
                { shipping_rate: process.env.NEXT_PUBLIC_SHIP_2},   
            ],
            line_items: res?.map((item) => {
                const img = item.image[0].asset._ref;
                const newImg = img.replace("image-", process.env.NEXT_PUBLIC_IMAGE_URL).replace("-png", ".png");

                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: item.name,
                            images: [newImg],
                        },
                        unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity,
                }
            }),
            success_url: `${redirectUrl}/success/?success=true`,
            cancel_url: `${redirectUrl}/?canceled=true`,
          }
      
      const session = await stripe.checkout.sessions.create(params);
      return NextResponse.json(session);
    } catch (err) {
        console.log(err)
    }
}