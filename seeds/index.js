const seedInstructor = require("./instructor-seeds.js");
const seedSubject = require("./subject-seeds.js");
const seedQuestion = require("./question-seeds.js");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("\n----- DATABASE SYNCED -----\n");

  await seedInstructor();
  console.log("\n----- INSTRUCTORS SEEDED -----\n");

  await seedSubject();
  console.log("\n----- SUBJECTS SEEDED -----\n");

  await seedQuestion();
  console.log("\n----- QUESTIONS AND ANSWERS SEEDED -----\n");

  process.exit(0);
};

seedAll();
