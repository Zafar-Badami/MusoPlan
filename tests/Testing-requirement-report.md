# Testing Requirements Report — MusoPlan Project

## 1. Introduction

MusoPlan is a console-based JavaScript application for managing musicians and troupes. It is currently at the **testing phase of the Software Development Life Cycle (SDLC)**.  
This report documents the testing requirements, strategy, tools, standards, and compliance considerations to ensure the application meets both functional and organisational requirements.

---

## 2. Testing Across the SDLC

- **Requirements Phase:**

  - Confirm requirements (classes, inputs/outputs, data validation) with the development team.
  - Create traceability between requirements and test cases.

- **Design Phase:**

  - Review data structures and class diagrams to ensure testability.
  - Prepare initial test plan and unit test cases for `Musician` and `Troupe`.

- **Implementation Phase:**

  - Write automated unit tests (using Jest/Mocha).
  - Prepare integration tests for troupe-member relationships and file export.

- **Testing Phase:**

  - Execute unit, integration, and functional tests.
  - Log and track defects against requirements.
  - Validate predictions and edge cases.

- **Deployment Phase:**

  - Run User Acceptance Testing (UAT) with stakeholders.
  - Verify file output matches reporting needs.

- **Maintenance Phase:**
  - Regression testing after code changes.
  - Keep test documentation updated for new features.

---

## 3. Confirming Requirements with the Team

- **Review Meetings:** Conduct team reviews of requirements and testing scope.
- **Shared Documentation:** Requirements, reports, and test cases version-controlled via Git.
- **Feedback Cycle:** Developers and testers confirm input validation, menu navigation, and reporting features before finalising tests.

---

## 4. Testing Types and Tools

- **Unit Testing:**
  - Validate object creation, methods, and return values.
  - Tools: Jest, Mocha.
- **Integration Testing:**
  - Verify interaction between classes (`Troupe` + `Musician`), file exports.
- **Functional Testing:**
  - Ensure menu options work as intended; invalid inputs are handled gracefully.
- **Regression Testing:**
  - Re-run after fixes or enhancements.
- **User Acceptance Testing (UAT):**
  - Stakeholder validation using console input.
- **Manual Testing:**
  - Confirm behaviour loops, input edge cases, and error handling.

---

## 5. Testing Benefits, Standards, and Terms

- **Benefits:**

  - Early defect detection (saves rework cost).
  - Confidence in system stability and correctness.
  - Compliance with organisational requirements.

- **Standards and Terms:**
  - **Black-box testing:** Focus on outputs for given inputs.
  - **White-box testing:** Review of internal logic for methods.
  - **Traceability Matrix:** Map requirements to test cases.
  - **Defect Lifecycle:** Open → Assigned → Fixed → Retested → Closed.

---

## 6. Organisational Guidelines and Frameworks

- **Version Control:** All test artefacts committed to Git under a `tests/` directory.
- **Documentation:** Testing reports and logs written in Markdown, stored in repo.
- **Compliance:** PR-based workflow with reviewer approvals.
- **Defect Management:** Defects logged in central tracking system with severity levels.
- **Testing Standards:** Align with ISTQB terminology and industry practices.

---

## 7. Knowledge of SDLC and Design Techniques

- **SDLC Awareness:** Testing spans all stages, not limited to the end phase.
- **Design Techniques Used:**
  - **Equivalence Partitioning:** Group valid/invalid input ranges for skill, cost, duration.
  - **Boundary Value Analysis:** Test edges (e.g., skill=1, skill=10).
  - **Decision Table Testing:** Verify outcomes of success prediction (High/Moderate/Low).
  - **Error Guessing:** Anticipate user misinputs like negative cost or empty names.

---

## 8. Next Steps

- Implement unit tests for `Musician` and `Troupe` methods.
- Create integration tests for troupe-member relationships.
- Add automated test scripts to CI/CD pipeline.
- Conduct UAT with sample data.
- Document defects and update reports.

---

## 9. Conclusion

Testing for MusoPlan is structured to cover requirements across the SDLC, involve team confirmation, apply appropriate testing types and tools, and comply with organisational frameworks. By applying industry-standard techniques and structured documentation, we ensure MusoPlan is reliable, maintainable, and fit for stakeholder approval.
