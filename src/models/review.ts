import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  ForeignKey,
  Sequelize,
} from "sequelize";
import { sequelize } from "../config/connection";
import { Product } from "./product";
import { User } from "./user";

export interface ProductReviewAttributes {
  id: number;
  product_id: number;
  user_id: number;
  name?: string;
  rating?: number;
  comment?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class ProductReview
  extends Model<ProductReviewAttributes>
  implements ProductReviewAttributes
{
  public id!: number;
  public product_id!: number;
  public user_id!: number;
  public name?: string;
  public rating?: number;
  public comment?: string;

  // timestamps!
  createdAt?: Date;
  updatedAt?: Date;

}

ProductReview.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    name: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.STRING,
    },
    createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: false,
      },
  },
  {
    sequelize,
    tableName: "product_reviews",
    timestamps:false
  }
);

Product.hasMany(ProductReview ,{
    foreignKey: 'product_id',
    
})
ProductReview.belongsTo(Product ,{
  foreignKey: 'product_id'
})

export default ProductReview;
