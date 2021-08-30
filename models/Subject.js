const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//create our Subject model
class Subject extends Model {}

Subject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "instructors",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "subjects",
  }
);
module.exports = Subject;
