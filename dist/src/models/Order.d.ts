import { Model, Optional } from "sequelize";
import { OrderStatusEnum, PaymentStatusEnum } from '../constants/enum';
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
interface OrderCreationAttributes extends Optional<OrderAttributes, "id"> {
}
declare class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
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
    static associate(models: any): void;
}
export default Order;
