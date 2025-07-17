
# MusoPlan Unit Testing Report

## Unit Test 1: Create Musician

- **User Requirement:** Create a valid musician object.
- **Input:** name = "Ayaan", category = "Drummer", skill = 7, cost = 120
- **Expected Output:** Musician object created with correct data.
- **Actual Output:** Object created successfully with accurate data.
- **Pass/Fail:** ✅ Pass

## Unit Test 2: Add Musician to Troupe

- **User Requirement:** Add musician to a troupe and list members.
- **Input:** Add 1 musician to troupe "Rhythm Masters"
- **Expected Output:** Members list includes the musician.
- **Actual Output:** Musician correctly added and listed.
- **Pass/Fail:** ✅ Pass

## Unit Test 3: Total Cost Calculation

- **User Requirement:** Correct cost based on duration and member costs.
- **Input:** 2 musicians, cost = 100 and 150, duration = 2 hours
- **Expected Output:** Total = (100 + 150) * 2 = 500
- **Actual Output:** 500
- **Pass/Fail:** ✅ Pass

## Unit Test 4: Average Skill Calculation

- **User Requirement:** Calculate average skill.
- **Input:** Skills: 6, 9, 7
- **Expected Output:** Average = 7.33
- **Actual Output:** 7.33
- **Pass/Fail:** ✅ Pass

## Unit Test 5: Invalid Input Handling

- **User Requirement:** Handle non-numeric input for skill.
- **Input:** skill = "high"
- **Expected Output:** Error message and prompt retry.
- **Actual Output:** Validation triggers as expected.
- **Pass/Fail:** ✅ Pass
