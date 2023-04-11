import { Model, Optional } from "sequelize";
interface OrderItemAttributes {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
    total: number;
    createdAt?: Date;
    updatedAt?: Date;
}
interface OrderItemCreationAttributes extends Optional<OrderItemAttributes, "id"> {
}
declare class OrderItem extends Model<OrderItemAttributes, OrderItemCreationAttributes> implements OrderItemAttributes {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
    total: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default OrderItem;
