import { statement } from "./statement";
import plays from "./plays.json";
import invoices from "./invoices.json";

describe("statement", () => {
  it("produces the expected statement", () => {
    expect(statement(invoices[0], plays)).toMatchInlineSnapshot(`
      "Statement for BigCo
        Hamlet: $650.00 (55 seats)
        Hamlet: $400.00 (29 seats)
        Hamlet: $400.00 (30 seats)
        As You Like It: $580.00 (35 seats)
        As You Like It: $357.00 (19 seats)
        As You Like It: $360.00 (20 seats)
        Othello: $500.00 (40 seats)
      Amount owed is $3,247.00
      You earned 54 credits
      "
    `);
  });

  it("throws on unknown play type", () => {
    const invoiceForUnknownPlayType = {
      customer: "Any Customer",
      performances: [{ playID: "unknownPlay", audience: 1 }],
    };
    const unknownPlayType = {
      unknownPlay: {
        name: "Unknown Play",
        type: "unknown",
      },
    };
    expect(() => statement(invoiceForUnknownPlayType, unknownPlayType)).toThrow(
      "unknown type: unknown"
    );
  });
});
