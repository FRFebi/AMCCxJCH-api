import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('Users', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});

// import { Sequelize, DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from '@sequelize/core';
// import { Attribute, PrimaryKey, AutoIncrement, NotNull } from '@sequelize/core/decorators-legacy';

// type UserAttributes = {
//     username: string,
//     password: string,
// };

// type UserCreationAttributes = Optional<UserAttributes, "id">

// class User extends Model<UserAttributes, UserCreationAttributes>{
//     @Attribute(DataTypes.INTEGER)
//     @PrimaryKey

// }

module.exports = {
    User,
}