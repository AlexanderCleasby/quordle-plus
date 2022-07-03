import matchCheck from "./matchCheck";

describe("", () => {
  it("identifies exact matches", () => {
    const res = matchCheck("toons", "troop", 2);
    expect(res).toEqual("exact-match");
  });

  it("identifies matches", () => {
    const res = matchCheck("times", "teams", 3);
    expect(res).toEqual("match");
  });

  it("doesn't yield a match if the letter is exact matched somewhere else", () => {
    const res = [
      matchCheck("teams", "teeth", 0),
      matchCheck("teams", "teeth", 1),
      matchCheck("teams", "teeth", 2),
      matchCheck("teams", "teeth", 3),
      matchCheck("teams", "teeth", 4),
    ];
    expect(res).toMatchInlineSnapshot(`
Array [
  "exact-match",
  "exact-match",
  "no-match",
  "no-match",
  "no-match",
]
`);
  });
});
