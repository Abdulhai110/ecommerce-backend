"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const helper_1 = require("../helpers/helper");
const enum_1 = require("../constants/enum");
const connection_1 = require("../config/connection");
class Order extends sequelize_1.Model {
    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: "user_id",
        });
        this.belongsTo(models.Contact, {
            foreignKey: "address_id",
        });
    }
}
Order.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    address_id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "contacts",
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM(...(0, helper_1.enumKeys)(enum_1.OrderStatusEnum)),
        defaultValue: enum_1.OrderStatusEnum.pending,
        allowNull: false,
    },
    totalItems: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
    },
    taxamount: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
    },
    deliveryCharges: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
    },
    paymentStatus: {
        type: sequelize_1.DataTypes.ENUM(...(0, helper_1.enumKeys)(enum_1.PaymentStatusEnum)),
        defaultValue: enum_1.PaymentStatusEnum.pending,
        allowNull: false,
    },
    trackingCode: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
    },
    dispatchedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: 0,
        allowNull: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    sequelize: connection_1.sequelize,
    tableName: "orders",
    timestamps: false,
});
exports.default = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL09yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQWtFO0FBQ2xFLDhDQUEwQztBQUMxQyw0Q0FBdUU7QUFDdkUscURBQWlEO0FBbUJqRCxNQUFNLEtBQU0sU0FBUSxpQkFBK0M7SUFlakUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFVO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUMxQixVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDN0IsVUFBVSxFQUFFLFlBQVk7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBRUQsS0FBSyxDQUFDLElBQUksQ0FDUjtJQUNFLEVBQUUsRUFBRTtRQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87UUFDdkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUTtRQUMvQixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsT0FBTztZQUNkLEdBQUcsRUFBRSxJQUFJO1NBQ1Y7UUFDRCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsU0FBUztLQUNwQjtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQy9CLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxVQUFVO1lBQ2pCLEdBQUcsRUFBRSxJQUFJO1NBQ1Y7UUFDRCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsU0FBUztLQUNwQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87UUFDdkIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxNQUFNLEVBQUM7UUFDTCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFBLGlCQUFRLEVBQUMsc0JBQWUsQ0FBQyxDQUFDO1FBQ2xELFlBQVksRUFBRSxzQkFBZSxDQUFDLE9BQU87UUFDckMsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxVQUFVLEVBQUM7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1FBQ3ZCLFlBQVksRUFBQyxDQUFDO1FBQ2QsU0FBUyxFQUFDLElBQUk7S0FDZjtJQUNELFNBQVMsRUFBQztRQUNSLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87UUFDdkIsWUFBWSxFQUFDLENBQUM7UUFDZCxTQUFTLEVBQUMsSUFBSTtLQUNmO0lBQ0QsZUFBZSxFQUFDO1FBQ2QsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztRQUN2QixZQUFZLEVBQUMsQ0FBQztRQUNkLFNBQVMsRUFBQyxJQUFJO0tBQ2Y7SUFDRCxhQUFhLEVBQUM7UUFDWixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFBLGlCQUFRLEVBQUMsd0JBQWlCLENBQUMsQ0FBQztRQUNwRCxZQUFZLEVBQUUsd0JBQWlCLENBQUMsT0FBTztRQUN2QyxTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELFlBQVksRUFBQztRQUNYLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87UUFDdkIsWUFBWSxFQUFDLENBQUM7UUFDZCxTQUFTLEVBQUMsSUFBSTtLQUNmO0lBQ0QsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtRQUNwQixZQUFZLEVBQUMsQ0FBQztRQUNkLFNBQVMsRUFBRSxJQUFJO0tBQ2hCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtRQUNwQixZQUFZLEVBQUUscUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDcEQsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO1FBQ3BCLFlBQVksRUFBRSxxQkFBUyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsQ0FBQztRQUNoRixTQUFTLEVBQUUsS0FBSztLQUNqQjtDQUNGLEVBQ0Q7SUFDRSxTQUFTLEVBQVQsc0JBQVM7SUFDVCxTQUFTLEVBQUUsUUFBUTtJQUNuQixVQUFVLEVBQUUsS0FBSztDQUNsQixDQUNGLENBQUM7QUFFRixrQkFBZSxLQUFLLENBQUMifQ==