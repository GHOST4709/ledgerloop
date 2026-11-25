import assert from "node:assert/strict";
import test from "node:test";
import { paymentStatusStyle } from "../apps/web/src/components/paymentStatus.ts";

test("settled payments use the settled badge style", () => {
  assert.deepEqual(paymentStatusStyle("SETTLED"), { label: "Settled", tone: "green" });
});
