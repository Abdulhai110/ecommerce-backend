"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
const enum_1 = require("../constants/enum");
const helper_1 = require("../helpers/helper");
class Category extends sequelize_1.Model {
}
Category.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    parentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'categories',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    description: {
        type: sequelize_1.DataTypes.STRING(250),
        allowNull: true
    },
    status: {
        type: sequelize_1.DataTypes.ENUM(...(0, helper_1.enumKeys)(enum_1.StatusEnum)),
        defaultValue: enum_1.StatusEnum.Active
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
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
// Category.hasMany(Product, {
//   foreignKey: 'categoryId'
// })
// Category.hasMany(Product, {
//   foreignKey: 'categoryId'
// })
exports.default = Category;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL2NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EseUNBTXFCO0FBQ25CLHFEQUFpRDtBQUNuRCw0Q0FBK0M7QUFDL0MsOENBQTZDO0FBRzdDLE1BQU0sUUFBUyxTQUFRLGlCQUd0QjtDQVNBO0FBRUQsUUFBUSxDQUFDLElBQUksQ0FDWDtJQUNFLEVBQUUsRUFBRTtRQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87UUFDdkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztRQUN2QixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxZQUFZO1lBQ25CLEdBQUcsRUFBRSxJQUFJO1NBQ1Y7UUFDRCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsU0FBUztLQUNwQjtJQUNELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDM0IsU0FBUyxFQUFFLElBQUk7S0FDaEI7SUFDSCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFBLGlCQUFRLEVBQUMsaUJBQVUsQ0FBQyxDQUFDO1FBQzdDLFlBQVksRUFBRSxpQkFBVSxDQUFDLE1BQU07S0FDaEM7SUFDSCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO1FBQ3BCLFlBQVksRUFBRSxxQkFBUyxDQUFDLEdBQUc7S0FDNUI7SUFDRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO1FBQ3BCLFlBQVksRUFBRSxxQkFBUyxDQUFDLEdBQUc7S0FDNUI7Q0FDRixFQUNEO0lBQ0UsU0FBUyxFQUFULHNCQUFTO0lBQ1QsVUFBVSxFQUFFLEtBQUs7Q0FDbEIsQ0FDRixDQUFDO0FBQ0YsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3QixLQUFLO0FBR0wsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3QixLQUFLO0FBQ0wsa0JBQWUsUUFBUSxDQUFDIn0=