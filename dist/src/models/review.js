"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
const product_1 = require("./product");
const user_1 = require("./user");
class ProductReview extends sequelize_1.Model {
}
ProductReview.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: product_1.Product,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    user_id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
            model: user_1.User,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    comment: {
        type: sequelize_1.DataTypes.STRING,
    },
    createdAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize_1.Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
    updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize_1.Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: false,
    },
}, {
    sequelize: connection_1.sequelize,
    tableName: "product_reviews",
    timestamps: false
});
product_1.Product.hasMany(ProductReview, {
    foreignKey: 'product_id',
});
ProductReview.belongsTo(product_1.Product, {
    foreignKey: 'product_id'
});
exports.default = ProductReview;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9yZXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FPbUI7QUFDbkIscURBQWlEO0FBQ2pELHVDQUFvQztBQUNwQyxpQ0FBOEI7QUFhOUIsTUFBTSxhQUNKLFNBQVEsaUJBQThCO0NBY3ZDO0FBRUQsYUFBYSxDQUFDLElBQUksQ0FDaEI7SUFDRSxFQUFFLEVBQUU7UUFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1FBQ3ZCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztRQUN2QixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsaUJBQU87WUFDZCxHQUFHLEVBQUUsSUFBSTtTQUNWO1FBQ0QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLFNBQVM7S0FDcEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUTtRQUMvQixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsV0FBSTtZQUNYLEdBQUcsRUFBRSxJQUFJO1NBQ1Y7UUFDRCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsU0FBUztLQUNwQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07S0FDdkI7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO0tBQ3hCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtLQUN2QjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxXQUFXO1FBQ2pCLFlBQVksRUFBRSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUNwRCxTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxXQUFXO1FBQ2pCLFlBQVksRUFBRSxxQkFBUyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsQ0FBQztRQUNoRixTQUFTLEVBQUUsS0FBSztLQUNqQjtDQUNKLEVBQ0Q7SUFDRSxTQUFTLEVBQVQsc0JBQVM7SUFDVCxTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLFVBQVUsRUFBQyxLQUFLO0NBQ2pCLENBQ0YsQ0FBQztBQUVGLGlCQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtJQUMzQixVQUFVLEVBQUUsWUFBWTtDQUUzQixDQUFDLENBQUE7QUFDRixhQUFhLENBQUMsU0FBUyxDQUFDLGlCQUFPLEVBQUU7SUFDL0IsVUFBVSxFQUFFLFlBQVk7Q0FDekIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsYUFBYSxDQUFDIn0=