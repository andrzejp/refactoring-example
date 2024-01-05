import { statement } from "./statement";
import plays from "./plays.json";
import invoices from "./invoices.json";

describe("statement", () => {
  it("produces the expected statement", () => {
    expect(statement(invoices[0], plays)).toMatchInlineSnapshot(`
      "Statement for BigCo
        Hamlet: $650.00 (55 seats)
        As You Like It: $580.00 (35 seats)
        Othello: $500.00 (40 seats)
      Amount owed is $1,730.00
      You earned 47 credits
      "
    `);
  });
});
