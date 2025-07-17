const readline = require("readline"); // Enable reading input from console
const fs = require("fs"); // Enable file operations(read/write)

//Musician class - define proprties and method
class Musician {
  constructor(name, category, skill, cost) {
    this.name = name;
    this.category = category;
    this.skill = skill;
    this.cost = cost;
  }

  toString() {
    return `${this.name} (${this.category}) - Skill: ${this.skill}, Cost:$${this.cost}`; //formatted string of musicians
  }
}

//Troupe Class - represent musical troupe
class Troupe {
  constructor(name, genre, instruments, duration) {
    this.name = name;
    this.genre = genre;
    this.instruments = instruments;
    this.duration = duration;
    this.members = [];
  }
  addMusician(musician) {
    this.members.push(musician); // add a musician to the troupe
  }

  getSummary() {
    return `${this.name}: ${this.members.length} member(s) - Genre: ${this.genre}`; // Troupe summary
  }

  getDetails() {
    const details = this.members.map((m) => ` - ${m.toString()}`).join("\n"); // each memnber's detail
    const avgSkill = this.getAverageSkill(); // calculate average skill
    const totalCost = this.getTotalCost(); // calcualte total cost
    let success = "Low";
    if (avgSkill >= 8) success = "High";
    else if (avgSkill >= 5) success = "Moderate";

    return `${this.name} Troupe\nGenre: ${this.genre}\nInstruments: ${this.instruments}\nDuration: ${this.duration}} hours\n\nMembers:\n${details}\n\n Total Cost: $${totalCost.toFixed(2)}\nAverage Skill: ${avgSkill.toFixed(1)}\nPredicted Success: ${success}`; // final detailed output
  }
  getTotalCost() {
    return (
      this.members.reduce((sum, musician) => sum + musician.cost, 0) *
      this.duration
    );
  }

  getAverageSkill() {
    if (this.members.length === 0) return 0;
    return (
      this.members.reduce((sum, m) => sum + m.skill, 0) / this.members.length
    );
  }
}

//readline interface, handles I/O
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Data structures
const categories = [
  //Allowed musician types
  "Guitarist",
  "Bassist",
  "Percussionist",
  "Vocalist",
  "Keyboardist",
];
const musicians = []; //stores musician objects
const troupes = []; //stores troupe objects

//Main menu display
function mainMenu() {
  console.log(`\n=================== MusoPlan Main Menu =================
1. Create musician
2. Create troupe
3. List musicians and troupes
4. Add musician(s) to troupe
5. Provide summary of troupe
6. Provide detailed description of troupe
7. Calculate the costs of engagement
8. Write detailed report of all troupes to a file
9. Exit
=========================================================`);

  rl.question("Choose an option (1–9): ", handleMenuChoice); // Ask user for a choice
}

//Handle menu choice
function handleMenuChoice(choice) {
  switch (choice.trim()) {
    case "1":
      createMusician();
      break;
    case "2":
      createTroupe();
      break;
    case "3":
      listNames();
      break;
    case "4":
      addMusiciansToTroupe();
      break;
    case "5":
      selectTroupe((t) => pauseAndPrint(t.getSummary()));
      break;
    case "6":
      selectTroupe((t) => pauseAndPrint(t.getDetails()));
      break;
    case "7":
      selectTroupe((t) => {
        const cost = t.getTotalCost();
        pauseAndPrint(
          `Total Engagement cost for ${t.duration} hour(s): $${cost.toFixed(2)}`
        );
      });
      break;
    case "8":
      writeTroupeDescriptionsToFile();
      break;
    case "9":
      console.log("\nExiting MusoPlan....");
      rl.close();
      break;
    default:
      console.log("\n......Invalid selection.......");
      pause();
  }
}
// Function to create musician
function createMusician() {
  rl.question("Enter musician name: ", (name) => {
    console.log("Choose category from below: ");
    categories.forEach((cat, i) => console.log(`${i + 1}. ${cat}`));

    rl.question("Enter category number: ", (catIdx) => {
      const category = categories[parseInt(catIdx) - 1];

      rl.question("Enter skill (1-10): ", (skillStr) => {
        rl.question("Enter cost per hour ($): ", (costStr) => {
          const skill = parseInt(skillStr); // convert skill to number
          const cost = parseFloat(costStr); // convert cost to number
          if (!name || !category || skill < 1 || skill > 10 || cost < 0) {
            console.log("Invalid input..."); // Check for invalid input
          } else {
            musicians.push(new Musician(name, category, skill, cost)); // Add new musician
            console.log(`Musician "${name}" added.`);
          }
          pause();
        });
      });
    });
  });
}

function createTroupe() {
  rl.question("Enter troupe name: ", (name) => {
    rl.question("Enter genre (e.g Jazz, Rock):", (genre) => {
      rl.question("Enter number of instruments:", (instr) => {
        rl.question("Enter duration (hours): ", (durStr) => {
          const duration = parseFloat(durStr); // convert duration to number
          const instruments = parseInt(instr); // convert instruments to number
          if (!name || !genre || isNaN(duration) || isNaN(instruments)) {
            console.log("\n.......Invalid input........");
          } else {
            troupes.push(new Troupe(name, genre, instruments, duration)); // add new troupe
            console.log(`Troupe "${name}" created.`);
          }
          pause();
        });
      });
    });
  });
}

function selectTroupe(callback) {
  if (troupes.length === 0) {
    console.log("\n.......No troupes created......");
    return pause();
  }
  listTroupes();
  rl.question("Select troupe number: ", (idx) => {
    const troupe = troupes[parseInt(idx) - 1];
    if (troupe)
      callback(troupe); // valid selection
    else {
      console.log("\n........Invalid selection........");
      pause();
    }
  });
}

function listMusicians() {
  console.log("\nMusician names: ");
  musicians.forEach((m, i) => {
    console.log(`${i + 1}. ${m.name}`);
  });
}

function listNames() {
  listMusicians();
  listTroupes();
  pause();
}
function listTroupes() {
  console.log("\nTroupe Names: ");
  troupes.forEach((t, i) => {
    console.log(`${i + 1}. ${t.name}`);
  });
}

function addMusiciansToTroupe() {
  if (musicians.length === 0 || troupes.length === 0) {
    console.log("Create musicians and troupes first.");
    return pause();
  }
  listTroupes();
  rl.question("Select troupe number: ", (troupeIdx) => {
    const troupe = troupes[parseInt(troupeIdx - 1)];
    listMusicians();
    rl.question("Enter musician numbers (comma-seperated):", (input) => {
      const indexes = input.split(",").map((n) => parseInt(n.trim()) - 1); // parase multiple indixes
      indexes.forEach((idx) => {
        if (musicians[idx]) troupe.addMusician(musicians[idx]); // add each valid musician
      });
      console.log(`Musician added to "${troupe.name}".`);
      pause();
    });
  });
}

function writeTroupeDescriptionsToFile() {
  const output = troupes.map((t) => t.getDetails()).join("\n\n"); //combined all details
  fs.writeFile("troup_detailed_report.txt", output, (err) => {
    if (err) console.log("Failed to write to file...");
    else console.log("Output saved to 'troup_detailed_report.txt'.");
    pause();
  });
}

function pauseAndPrint(text) {
  console.log(text);
  pause();
}

function pause() {
  rl.question("\nPress Enter to return to main menu...", () => {
    mainMenu(); // Send back to main menu
  });
}
mainMenu();
