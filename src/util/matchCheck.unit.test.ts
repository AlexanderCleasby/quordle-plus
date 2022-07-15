import { matchCheck } from './matchCheck'

describe('match check function', () => {
  it('identifies exact matches', () => {
    const res = matchCheck('toons', 'troop', 2)
    expect(res).toEqual('exact-match')
  })

  it('identifies matches', () => {
    const res = matchCheck('times', 'teams', 3)
    expect(res).toEqual('match')
  })

  it("doesn't yield a match if the letter is exact matched somewhere else", () => {
    const res = [
      matchCheck('teeth', 'teams', 0),
      matchCheck('teeth', 'teams', 1),
      matchCheck('teeth', 'teams', 2),
      matchCheck('teeth', 'teams', 3),
      matchCheck('teeth', 'teams', 4),
    ]
    expect(res).toMatchInlineSnapshot(`
Array [
  "exact-match",
  "exact-match",
  "no-match",
  "no-match",
  "no-match",
]
`)
  })
})
