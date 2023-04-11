"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPhoto = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
class ProductPhoto extends sequelize_1.Model {
}
exports.ProductPhoto = ProductPhoto;
ProductPhoto.init({
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
            model: 'products',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    photo_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    secure_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.fn('NOW'),
    },
}, {
    sequelize: connection_1.sequelize,
    tableName: 'product_photos',
    timestamps: false,
    // paranoid: false,
    // underscored: true,
    //   freezeTableName: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFBob3Rvcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvcHJvZHVjdFBob3Rvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBa0U7QUFDbEUscURBQWlEO0FBWWpELE1BQWEsWUFBYSxTQUFRLGlCQUE2RDtDQVc5RjtBQVhELG9DQVdDO0FBR0QsWUFBWSxDQUFDLElBQUksQ0FDYjtJQUNFLEVBQUUsRUFBRTtRQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87UUFDdkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1FBQ3ZCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxVQUFVO1lBQ2pCLEdBQUcsRUFBRSxJQUFJO1NBQ1Y7UUFDRCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsU0FBUztLQUNwQjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtRQUNwQixTQUFTLEVBQUUsS0FBSztRQUNoQixZQUFZLEVBQUUscUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7S0FDckQ7SUFDRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO1FBQ3BCLFlBQVksRUFBRSxxQkFBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7S0FDbEM7Q0FDRixFQUNEO0lBQ0UsU0FBUyxFQUFULHNCQUFTO0lBQ1QsU0FBUyxFQUFFLGdCQUFnQjtJQUMzQixVQUFVLEVBQUUsS0FBSztJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3ZCLDJCQUEyQjtDQUMxQixDQUNKLENBQUEifQ==