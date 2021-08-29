const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const sequelize = require("../config/connection");
//create our Instructor model

class Instructor extends Model {}
//define table columns and configurations


Instructor.init(
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
    //define a instructor name column
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      //there cannot be any duplicate email values in this table
      unique: true,
      //iff allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isEmail: true,
      },
    },
    //define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //this means that password must be at least four characters long
        len: [4],
      },
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
    hooks: {
    // set up beforeCreate lifecycle "hook" functionality
    async beforeCreate(newInstructor) {
      newInstructor.password = await bcrypt.hash(newInstructor.password, 10);
        return newInstructor;
        
    },
    // set up beforeUpdate lifecycle "hook" functionality
    async beforeUpdate(updatedInstructor) {
      updatedInstructor.password = await bcrypt.hash(updatedInstructor.password, 10);
        return updatedInstructor;
    }}
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
    modelName: "instructor",
  }
);
module.exports = Instructor;
