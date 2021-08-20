const { Model, DataTypes } = require("sequalize");
const sequelize = require("../config/connection");
//create our AnswerChoices model
class AnswerChoices extends Model {}
//definte table columns and configurations
AnswerChoices.init(
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
    //define a answerchoices name column
    choices: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "questions",
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
    modelName: "answerchoices",
  }
);
module.exports = AnswerChoices;
