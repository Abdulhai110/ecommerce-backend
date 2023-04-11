import { Model, Optional, DataTypes, Sequelize } from "sequelize";
import {enumKeys} from '../helpers/helper'
import { OrderStatusEnum ,PaymentStatusEnum } from '../constants/enum';
import { sequelize } from "../config/connection";
interface OrderAttributes {
  id: number;
  user_id: number;
  address_id: number;
  total: number;
  status: OrderStatusEnum;
  totalItems: number;
  taxamount: number;
  deliveryCharges: number;
  paymentStatus: PaymentStatusEnum;
  trackingCode: number;
  dispatchedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, "id"> {}

class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
  public id!: number;
  public user_id!: number;
  public address_id!: number;
  public total!: number;
  public status!: OrderStatusEnum;
  public totalItems!: number;
  public taxamount!: number;
  public deliveryCharges!: number;
  public paymentStatus!: PaymentStatusEnum;
  public trackingCode!: number;
  public dispatchedAt!: Date;
  public createdAt!: Date;
  public updatedAt!: Date;

  static associate(models:any) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
    });
    this.belongsTo(models.Contact, {
      foreignKey: "address_id",
    });
  }
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    address_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: "contacts",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status:{
      type: DataTypes.ENUM(...enumKeys(OrderStatusEnum)),
      defaultValue: OrderStatusEnum.pending, 
      allowNull: false,
    },
    totalItems:{
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull:true
    },
    taxamount:{
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull:true
    },
    deliveryCharges:{
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull:true
    },
    paymentStatus:{
      type: DataTypes.ENUM(...enumKeys(PaymentStatusEnum)),
      defaultValue: PaymentStatusEnum.pending, 
      allowNull: false,
    },
    trackingCode:{
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull:true
    },
    dispatchedAt: {
      type: DataTypes.DATE,
      defaultValue:0,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "orders",
    timestamps: false,
  }
);

export default Order;