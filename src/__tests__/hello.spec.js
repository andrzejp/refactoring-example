import hello from "../hello";

describe("hello", () => {
  it('says "Hello!"', () => {
    expect(hello()).toBe("Hello!");
  });
});
