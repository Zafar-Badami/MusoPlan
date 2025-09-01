// ---

// ## Jest: `tests/musoplan.test.js`

const { Musician, Troupe } = require("./MusoPlan");
/* ---------- small HELPERS for expected values ---------- */
const HELPERS = {
  totalCost(members, duration) {
    const sum = members.reduce((a, m) => a + m.cost, 0);
    return sum * duration;
  },
  avgSkill(members) {
    if (!members.length) return 0;
    return members.reduce((a, m) => a + m.skill, 0) / members.length;
  },
};

const M1 = () => new Musician("Ava", "Guitarist", 9, 120);
const M2 = () => new Musician("Ben", "Keyboardist", 6, 100);
const M3 = () => new Musician("Cara", "Vocalist", 4, 80);

const T1 = () => new Troupe("Sunset Trio", "Jazz", 3, 2); // duration=2

/* ---------- TC-001 ---------- */
test("TC-001 Create Musician (EP): props set", () => {
  const m = M1();
  expect(m.name).toBe("Ava");
  expect(m.category).toBe("Guitarist");
  expect(m.skill).toBe(9);
  expect(m.cost).toBe(120);
});

/* ---------- TC-002 ---------- */
test("TC-002 Musician.toString() (EP): formatting", () => {
  const m = M1();
  // Current app prints "Cost:$<amount>" (no space after colon)
  expect(m.toString()).toBe("Ava (Guitarist) - Skill: 9, Cost:$120");
});

/* ---------- TC-003 ---------- */
test("TC-003 Create Troupe (EP): empty members; props set", () => {
  const t = T1();
  expect(t.members).toEqual([]);
  expect(t.name).toBe("Sunset Trio");
  expect(t.genre).toBe("Jazz");
  expect(t.instruments).toBe(3);
  expect(t.duration).toBe(2);
});

/* ---------- TC-004 ---------- */
test("TC-004 Add musician (EP)", () => {
  const t = T1();
  const m = M1();
  t.addMusician(m);
  expect(t.members).toEqual([m]);
});

/* ---------- TC-005 ---------- */
test("TC-005 Total cost (EP): sum(costs) * duration", () => {
  const t = T1(); // dur=2
  const m1 = M1(); // 120
  const m2 = M2(); // 100
  t.addMusician(m1);
  t.addMusician(m2);
  const expected = HELPERS.totalCost([m1, m2], t.duration); // 440
  expect(t.getTotalCost()).toBe(expected);
});

/* ---------- TC-006 ---------- */
test("TC-006 Average skill (EP): mean of members", () => {
  const t = T1();
  const m1 = M1(); // 9
  const m2 = M2(); // 6
  const m3 = M3(); // 4
  t.addMusician(m1);
  t.addMusician(m2);
  t.addMusician(m3);
  const expected = HELPERS.avgSkill([m1, m2, m3]); // 6.333...
  expect(t.getAverageSkill()).toBeCloseTo(expected, 10);
});

/* ---------- TC-007 ---------- */
test("TC-007 Troupe summary (EP)", () => {
  const t = T1();
  t.addMusician(M1());
  t.addMusician(M2());
  expect(t.getSummary()).toBe("Sunset Trio: 2 member(s) - Genre: Jazz");
});

/* ---------- TC-008 ---------- */
test("TC-008 Prediction High (DT): avg >= 8", () => {
  const t = new Troupe("HighBand", "Jazz", 2, 1);
  t.addMusician(new Musician("Hal", "Guitarist", 8, 50));
  t.addMusician(new Musician("Ivy", "Vocalist", 8, 50));
  const details = t.getDetails();
  expect(details).toContain("Predicted Success: High");
});

/* ---------- TC-009 ---------- */
test("TC-009 Prediction Moderate (DT): 5 <= avg < 8", () => {
  const t = T1();
  t.addMusician(M1()); // 9
  t.addMusician(M2()); // 6 -> avg 7.5
  const details = t.getDetails();
  expect(details).toContain("Predicted Success: Moderate");
});

/* ---------- TC-010 ---------- */
test('TC-010 Edge: instruments = 0 (BVA): details include "Instruments: 0"', () => {
  const t = new Troupe("Zeros", "Heroes", 0, 1);
  t.addMusician(M1());
  const details = t.getDetails();
  expect(details).toContain("Instruments: 0");
});
