import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export const getPaymentIntent = async (payment_intent: string) => {
  if (payment_intent) {
    const paymentIntent: Stripe.PaymentIntent =
      await stripe.paymentIntents.retrieve(payment_intent);

    return { id: paymentIntent.id, amount: paymentIntent.amount };
  }
};
