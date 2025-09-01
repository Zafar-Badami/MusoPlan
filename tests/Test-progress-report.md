# MusoPlan Test Progress Report

---

## 1. Date of Execution

- **Execution Date:** 2025-09-01
- **Environment:** Node.js (v18+), Jest (v29.7), VS Code IDE

---

## 2. Test Cases

| Test Case ID | User Requirement Tested           | Inputs                               | Expected Outcome                                | Result  |
| ------------ | --------------------------------- | ------------------------------------ | ----------------------------------------------- | ------- |
| TC-001       | Create Musician                   | Ava, Guitarist, 9, 120               | Musician object created with correct properties | ✅ Pass |
| TC-002       | Musician.toString() formatting    | Ava                                  | `"Ava (Guitarist) - Skill: 9, Cost:$120"`       | ✅ Pass |
| TC-003       | Create Troupe                     | Sunset Trio, Jazz, 3 instruments, 2h | Empty members list, correct troupe properties   | ✅ Pass |
| TC-004       | Add single musician               | T1 + Ava                             | Members list contains Ava                       | ✅ Pass |
| TC-005       | Calculate total cost              | T1 + Ava + Ben, duration=2           | (120+100)\*2 = 440                              | ✅ Pass |
| TC-006       | Calculate average skill           | Ava (9), Ben (6), Cara (4)           | Average skill = 6.33                            | ✅ Pass |
| TC-007       | Generate troupe summary           | T1 with Ava + Ben                    | `"Sunset Trio: 2 member(s) - Genre: Jazz"`      | ✅ Pass |
| TC-008       | Predict troupe success (High)     | Avg skill = 8                        | `"Predicted Success: High"`                     | ✅ Pass |
| TC-009       | Predict troupe success (Moderate) | Avg skill = 7.5                      | `"Predicted Success: Moderate"`                 | ✅ Pass |
| TC-010       | Edge case: Instruments = 0        | Troupe with 0 instruments            | Report includes `"Instruments: 0"`, no crash    | ✅ Pass |

---

## 3. Defects Identified

- **CLI Menu Coverage:** Not directly testable under Jest due to interactive `readline` inputs.
- **Export Function Coverage:** File export logic not covered in tests.
- **Formatting Edge:** Minor inconsistency in output string (extra brace `}` in `Duration` line).

---

## 4. Strategies for Amending Defects

- **Refactor CLI:** Extract pure functions (e.g., `parseMenuOption`, `formatDuration`) for direct unit testing.
- **Mock FS module:** Use `jest.mock('fs')` to simulate file writing and verify export logic.
- **Fix String Bug:** Standardize `getDetails()` output formatting for Duration.

---

## 5. Test Coverage

- **Statement Coverage:** ~25% (mainly class logic tested).
- **Branch Coverage:** ~12% (only “High” and “Moderate” predictions tested; add “Low”).
- **Functions Coverage:** ~24% (methods like `addMusician`, `getTotalCost` covered).
- **CLI/Export Coverage:** 0% (not tested due to interaction & file system dependencies).

---

## 6. JUnit XML Output

A JUnit-style XML test results file is generated automatically by Jest and saved in:
