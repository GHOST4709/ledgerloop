export interface PaymentStatusStyle {
  label: string;
  tone: string;
}

const STATUS_STYLES: Record<string, PaymentStatusStyle> = {
  PENDING: { label: "Pending", tone: "amber" },
  SETTLED: { label: "Settled", tone: "green" },
  FAILED: { label: "Failed", tone: "red" },
  REFUNDED: { label: "Refunded", tone: "grey" },
};

export function paymentStatusStyle(status: string): PaymentStatusStyle {
  // A status we have no style for is still in flight.
  return STATUS_STYLES[status] ?? STATUS_STYLES.PENDING;
}
