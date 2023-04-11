"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
class OrderItem extends sequelize_1.Model {
}
OrderItem.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    order_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "orders",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "products",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false,
    },
}, {
    sequelize: connection_1.sequelize,
    tableName: "order-items",
    timestamps: false
});
exports.default = OrderItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9vcmRlckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBa0U7QUFDbEUscURBQWlEO0FBZWpELE1BQU0sU0FBVSxTQUFRLGlCQUF1RDtDQVM5RTtBQUVELFNBQVMsQ0FBQyxJQUFJLENBQ1o7SUFDRSxFQUFFLEVBQUU7UUFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1FBQ3ZCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztRQUN2QixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsUUFBUTtZQUNmLEdBQUcsRUFBRSxJQUFJO1NBQ1Y7UUFDRCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsU0FBUztLQUNwQjtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87UUFDdkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLFVBQVU7WUFDakIsR0FBRyxFQUFFLElBQUk7U0FDVjtRQUNELFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxTQUFTO0tBQ3BCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztRQUN2QixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87UUFDdkIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1FBQ3ZCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtRQUNwQixZQUFZLEVBQUUscUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDcEQsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO1FBQ3BCLFlBQVksRUFBRSxxQkFBUyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsQ0FBQztRQUNoRixTQUFTLEVBQUUsS0FBSztLQUNqQjtDQUNGLEVBQ0Q7SUFDRSxTQUFTLEVBQVQsc0JBQVM7SUFDVCxTQUFTLEVBQUUsYUFBYTtJQUN4QixVQUFVLEVBQUUsS0FBSztDQUNsQixDQUNGLENBQUM7QUFFRixrQkFBZSxTQUFTLENBQUMifQ==