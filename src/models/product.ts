import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  ForeignKey,
  Sequelize,
} from "sequelize";
import { sequelize } from "../config/connection";
import { User } from "./user";
import Category from "./category";
import ProductReview from "./review";
import { ProductPhoto } from "./productPhotos";

interface ProductAttributes {
  id: number;
  name: string;
  price: number;
  description: string;
  categoryId: number;
  brand: string;
  ratings: number;
  numberofreviews: number;
  user_id: number;
  createdAt: Date;
  updatedAt: Date;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public categoryId!: number;
  public brand!: string;
  public ratings!: number;
  public numberofreviews!: number;
  public user_id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // public readonly reviews?: {
  //   id: number;
  //   user_id: number;
  //   name: string;
  //   rating: number;
  //   comment: string;
  //   createdAt: Date;
  //   updatedAt: Date;
  // }[];

  // public static associations: {
  // user: Association<Product, User>;
  // category: Association<Product, Category>;
  // };
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Category",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ratings: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    numberofreviews: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
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

Category.hasMany(Product, {
    foreignKey: 'categoryId'
  })
Product.hasMany(ProductPhoto,{
    foreignKey: 'product_id'
})

Product.belongsTo(Category)
  
// Product.hasMany(ProductReview )

// ProductReview.belongsTo(Product,{
//   foreignKey: 'product_id'
// })

// Product.hasMany(ProductReview, {
//   foreignKey: 'product_id'
// });
export { Product };
