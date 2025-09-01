# MusoPlan Comprehensive Test Plan

## 1. Introduction

The MusoPlan application is a JavaScript console-based tool to manage musicians and troupes, calculate engagement costs, and export troupe reports.  
This test plan defines the testing strategy, test data, test cases, and compliance framework.

---

## 2. Objectives

- Verify all functional requirements of MusoPlan.
- Ensure compliance with organisational guidelines (VCS, testing standards).
- Provide traceability between requirements and test cases.
- Apply at least three test case design techniques (EP, BVA, DT).

---

## 3. Scope

- **In Scope:** Musician creation, troupe creation, adding members, cost calculation, skill averaging, summaries, details, file export, and input validation.
- **Out of Scope:** Integration with external systems, GUI/web interfaces.

---

## 4. Data Structures Required During Testing

- **Musician List:** `Musician[]` (name, category, skill [1–10], cost [≥0])
- **Troupe List:** `Troupe[]` (name, genre, instruments [number], duration [number], members[])
- **Category Array:** `["Guitarist","Bassist","Percussionist","Vocalist","Keyboardist"]`

---

## 5. Test Case Design Techniques

- **Equivalence Partitioning (EP):** Inputs divided into valid/invalid classes.
- **Boundary Value Analysis (BVA):** Edge conditions like skill = 1/10, cost ≥ 0.
- **Decision Table (DT):** Prediction of troupe success (High/Moderate/Low).
- **Error Guessing (EG):** Anticipated invalid inputs (empty, non-numeric).

---

## 6. Test Data

- **Musicians:**

  - M1: Ava / Guitarist / skill 9 / cost 120
  - M2: Ben / Keyboardist / skill 6 / cost 100
  - M3: Cara / Vocalist / skill 4 / cost 80

- **Troupes:**
  - T1: Sunset Trio / Jazz / instruments 3 / duration 2
  - T2: Night Shift / Rock / instruments 2 / duration 1.5

---

## 7. Test Cases

| ID     | Requirement                | Inputs            | Expected Outcome                         | Tech |
| ------ | -------------------------- | ----------------- | ---------------------------------------- | ---- |
| TC-001 | Create Musician            | M1 values         | Properties set; no errors                | EP   |
| TC-002 | Musician.toString()        | M1                | Ava (Guitarist) - Skill: 9, Cost:$120    | EP   |
| TC-003 | Create Troupe              | T1 values         | members.length = 0; props set            | EP   |
| TC-004 | Add musician               | T1 + M1           | members = [M1]                           | EP   |
| TC-005 | Total cost                 | T1 + M1+M2, dur=2 | (120+100)\*2 = 440                       | EP   |
| TC-006 | Average skill              | M1+M2+M3          | 6.33                                     | EP   |
| TC-007 | Troupe summary             | T1 with M1,M2     | "Sunset Trio: 2 member(s) - Genre: Jazz" | EP   |
| TC-008 | Prediction High            | Avg ≥ 8           | Predicted Success: High                  | DT   |
| TC-009 | Prediction Moderate        | Avg in [5,8]      | Predicted Success: Moderate              | DT   |
| TC-010 | Edge case: Instruments = 0 | instruments=0     | Details show 0; no crash                 | BVA  |

---

## 8. Test Scripts & Automation

- **Framework:** Jest (organisationally approved).
- **IDE:** Visual Studio Code.
- **Export classes for testing:**

```js
module.exports = { Musician, Troupe };
```
