const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

//create our Instructor model
class Instructor extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Instructor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      }
    }
  },
  {
    hooks: {
      async beforeCreate(newInstructor) {
        newInstructor.password = await bcrypt.hash(newInstructor.password, 10);
        return newInstructor;
      },
      async beforeUpdate(updatedInstructor) {
        updatedInstructor.password = await bcrypt.hash(
          updatedInstructor.password,
          10
        );
        return updatedInstructor;
      }
    },

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "instructors",
  }
);

module.exports = Instructor;
