"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
const category_1 = __importDefault(require("./category"));
const productPhotos_1 = require("./productPhotos");
class Product extends sequelize_1.Model {
}
exports.Product = Product;
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Category",
            key: "id",
        },
        onDelete: "CASCADE",
    },
    brand: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ratings: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    numberofreviews: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    user_id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: "User",
            key: "id",
        },
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: connection_1.sequelize,
    timestamps: false,
});
category_1.default.hasMany(Product, {
    foreignKey: 'categoryId'
});
Product.hasMany(productPhotos_1.ProductPhoto, {
    foreignKey: 'product_id'
});
Product.belongsTo(category_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5Q0FPbUI7QUFDbkIscURBQWlEO0FBRWpELDBEQUFrQztBQUVsQyxtREFBK0M7QUFnQi9DLE1BQU0sT0FBUSxTQUFRLGlCQUF3QjtDQTJCN0M7QUF1RlEsMEJBQU87QUFyRmhCLE9BQU8sQ0FBQyxJQUFJLENBQ1Y7SUFDRSxFQUFFLEVBQUU7UUFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1FBQ3ZCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMxQixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87UUFDdkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLFVBQVU7WUFDakIsR0FBRyxFQUFFLElBQUk7U0FDVjtRQUNELFFBQVEsRUFBRSxTQUFTO0tBQ3BCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxxQkFBUyxDQUFDLEtBQUs7UUFDckIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFDRCxlQUFlLEVBQUU7UUFDZixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1FBQ3ZCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDL0IsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLE1BQU07WUFDYixHQUFHLEVBQUUsSUFBSTtTQUNWO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO1FBQ3BCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFlBQVksRUFBRSxxQkFBUyxDQUFDLEdBQUc7S0FDNUI7SUFDRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO1FBQ3BCLFlBQVksRUFBRSxxQkFBUyxDQUFDLEdBQUc7S0FDNUI7Q0FDRixFQUNEO0lBQ0UsU0FBUyxFQUFULHNCQUFTO0lBQ1QsVUFBVSxFQUFFLEtBQUs7Q0FDbEIsQ0FDRixDQUFDO0FBRUYsa0JBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO0lBQ3RCLFVBQVUsRUFBRSxZQUFZO0NBQ3pCLENBQUMsQ0FBQTtBQUNKLE9BQU8sQ0FBQyxPQUFPLENBQUMsNEJBQVksRUFBQztJQUN6QixVQUFVLEVBQUUsWUFBWTtDQUMzQixDQUFDLENBQUE7QUFFRixPQUFPLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsQ0FBQSJ9