import { Model, Sequelize, DataTypes } from 'sequelize';

export default class User extends Model {
  public id?: number;
  public name!: string;
  public age?: number;
}
export const UserMap = (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.CHAR
    },
    age:{
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName: 'dose',
    timestamps: false
  });
  User.sync();
}