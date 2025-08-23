# Testing Requirements Report — MusoPlan (CLI, Node.js)

## 1) Introduction

This document defines how we will test the current MusoPlan CLI app (Node.js) that manages musicians and troupes, generates summaries/details, calculates engagement costs, and writes a combined report to `troup_detailed_report.txt`.

## 2) Test Objectives

- Verify functional correctness of:
  - Musician creation and formatting
  - Troupe creation
  - Adding one/many musicians to a troupe
  - Summaries and detailed descriptions
  - Cost and average skill calculations
  - Async file export (`fs.writeFile`) to `troup_detailed_report.txt`
- Validate input handling and menu navigation
- Ensure testing complies with organisational requirements

## 3) Scope

**In scope**

- Unit tests: `Musician`, `Troupe`
- Functional tests: menu actions (invoked as functions)
- Integration: file export content and structure
- Input validation paths

**Out of scope**

- Performance, security, GUI testing

## 4) Test Strategy

- **Unit**: constructors, `toString()`, `addMusician()`, `getTotalCost()`, `getAverageSkill()`, string outputs of `getSummary()`/`getDetails()`.
- **Functional/Integration**: multiple musician add; file export content and delimiter (`\n\n` join); ensure async write callback handles success/failure.
- **Negative/Edge**: invalid menu choice; invalid musician/troupe inputs; zero-member troupe cost/avg.
- **Regression**: rerun core unit + export tests after fixes.
- **UAT (manual)**: brief CLI walkthrough.

## 5) Test Data

- Categories: `Guitarist`, `Bassist`, `Percussionist`, `Vocalist`, `Keyboardist`
- Example musicians:
  - Altaf (Guitarist, skill 9, cost 120)
  - Bashir (Keyboardist, skill 6, cost 100)
  - Qasim (Vocalist, skill 4, cost 80)
- Example troupe:
  - Sunset Trio (genre Jazz, instruments **3** (count), duration 2)

## 6) Deliverables

- Unit Testing Report (this repo)
- Executable Jest tests (optional)
- Defect log
- Final summary & sign-off

## 7) Compliance with Organisational Requirements

- **Documentation & Traceability**: Each requirement mapped to tests; Markdown reports kept in VCS.
- **Version Control**: Tests, logs, and fixes via Git branches + PRs; commit messages reference Test IDs/Defect IDs.
- **Defect Management**: Central log with severity, owner, status; retest on fix.
- **Reviews & Approvals**: Peer review of tests; stakeholder UAT sign-off recorded.
- **Evidence Retention**: Keep test outputs, console screenshots (where helpful), and exported files as artefacts.

## 8) Entry / Exit Criteria

**Entry**: feature complete; peer review done; tooling available.  
**Exit**: all planned tests executed; no open critical defects; UAT sign-off; docs updated.

## 9) Tools & Environment

- Node.js ≥ 18
- VS Code integrated terminal
- Git
- Optional: Jest for automation

## 10) Risks / Notes

- Known formatting quirk in `getDetails()`: `Duration: ${this.duration}} hours` (extra `}`). Track as a defect; keep expected output aligned until fixed.
