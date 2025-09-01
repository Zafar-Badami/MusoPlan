# MusoPlan Testing Meeting Minutes

**Date:** 2025-09-01  
**Attendees:**

- Product Manager (PM) – MusoPlan
- QA/Test Engineer (You)

**Agenda:**

1. Review of Test Progress Report
2. Fit of Test Plan within the SDLC
3. Traceability of Test Cases to Requirements
4. Defects Identified & Management Strategies
5. Next Steps & Repository Compliance

---

## 1. Fit of Test Plan into the SDLC

- The MusoPlan test plan was executed during the **Verification & Validation phase** of the Software Development Life Cycle (SDLC).
- The plan ensured that testing activities were aligned with requirements gathering and design, providing **early feedback** to development.
- Test automation with Jest supports **continuous integration**, enabling automated regression checks in future sprints.

---

## 2. Test Cases and Requirements

- Test cases were directly mapped to functional requirements identified in **Activity 1**:
  - Musician and Troupe creation
  - Member management (adding musicians)
  - Cost calculation and average skill computation
  - Summaries and detailed reports
  - Success prediction (Decision Table: High, Moderate, Low)
- Each test case ensured **traceability**, confirming that no requirement was left unverified.

---

## 3. Defects Identified

- **CLI Menu Coverage**: Interactive inputs not covered under Jest.
- **Export Function Coverage**: File export not tested, as FS module was not mocked.
- **Formatting Edge Case**: Extra brace in `getDetails()` duration output.

---

## 4. Defect Management Strategies

- **Refactor CLI logic** into pure functions so they can be tested independently.
- **Mock FS module** in Jest to verify file export without creating actual files.
- **Fix formatting bug** by adjusting string templates in `getDetails()`.
- Defects will be logged in the **issue tracker**, assigned to the dev team, and verified in the next regression cycle.

---

## 5. Next Steps

- Extend test coverage to include **“Low” prediction** and **boundary cases** (e.g., cost = 0, empty troupe skill = 0).
- Add Jest mocks for `fs` to cover export feature.
- Apply bug fix for `Duration` string formatting.
- Merge all testing branches (`feature/tests`, `bugfix/tests`) into **`main` branch** to comply with organisational VCS procedures.

---

**Meeting Outcome:**

- Product Manager approved the current testing scope.
- Agreed to extend coverage in the next sprint.
- QA to monitor defect fixes and confirm compliance in regression testing.

---

**Action Items:**

- [ ] Developer to fix formatting bug in `getDetails()`
- [ ] QA to add new test cases (Low prediction, cost=0, empty troupe)
- [ ] Repository maintainer to confirm all testing branches merged into `main`

---

**Document Location:**  
This file is stored at: test directory.
