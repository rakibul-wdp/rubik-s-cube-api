import { PopupDialog } from "@/components/common/popup-dialog";
import {
  PaymentMethodHero,
  PaymentMethodMain,
} from "@/components/page/payment-method";
import { getPaymentIntent } from "@/utils/get-payment-intent";
import { FC } from "react";

interface IPaymentMethod {
  params: { id: string };
  searchParams: { payment_intent: string };
}

const PaymentMethod: FC<IPaymentMethod> = async ({
  params: { id },
  searchParams: { payment_intent },
}) => {
  const paymentIntent = await getPaymentIntent(payment_intent || "");

  return (
    <main>
      <PaymentMethodHero />
      <PaymentMethodMain id={id} />
      {paymentIntent?.id && paymentIntent.amount && (
        <PopupDialog
          isSuccess
          open={paymentIntent?.id && paymentIntent.amount ? true : false}
          message="Thank you for your purchase. Your transaction was completed successfully."
        />
      )}
    </main>
  );
};

export default PaymentMethod;
