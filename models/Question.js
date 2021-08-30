const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//create our Question model
class Question extends Model {}
//definte table columns and configurations
Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "questions",
  }
);
module.exports = Question;
