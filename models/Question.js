const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//create our Question model
class Question extends Model {}
//definte table columns and configurations
Question.init(
  {
    //define an ID column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    //define a question name column
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //define a answer columns
    correct_answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choiceA: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    choiceB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choiceC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    choiceD: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "subjects",
        key: "id",
      },
    },
  },
  {
    //TABLE CONFIGURATION OPTIONS GO HERE ((https://sequelize.org/v5/manual/models-definition.html#configuration))
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: "question",
  }
);
module.exports = Question;
