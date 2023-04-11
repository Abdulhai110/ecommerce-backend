
import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
    Sequelize,
  } from "sequelize";
  import { sequelize } from "../config/connection";
import { StatusEnum } from "../constants/enum";
import { enumKeys } from "../helpers/helper";
import { Product } from "./product";

class Category extends Model <
InferAttributes<Category>,
InferCreationAttributes<Category>
>{
  public id!: number;
  public name!: string;
  public parentId!: number | null;
  public description: string;
  public status:StatusEnum;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Category.init(
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
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    description: {
        type: DataTypes.STRING(250),
        allowNull: true
      },
    status: {
        type: DataTypes.ENUM(...enumKeys(StatusEnum)),
        defaultValue: StatusEnum.Active
      },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
  }
);
// Category.hasMany(Product, {
//   foreignKey: 'categoryId'
// })


// Category.hasMany(Product, {
//   foreignKey: 'categoryId'
// })
export default Category;
