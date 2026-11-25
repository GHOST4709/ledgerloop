// Label and colour for a payment's status, used on every payments screen.
import { paymentStatusStyle } from "./paymentStatus.ts";

export function PaymentStatusBadge({ status }: { status: string }) {
  const style = paymentStatusStyle(status);
  return (
    <span className={`badge badge-${style.tone}`} data-status={status}>
      {style.label}
    </span>
  );
}
