"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("../../constants/enum");
const helper_1 = require("../../helpers/helper");
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
module.exports = {
    up: (queryInterface) => {
        return queryInterface.createTable('categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            parentId: {
                type: sequelize_1.DataTypes.INTEGER,
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
                defaultValue: sequelize_2.default.fn('NOW'),
            },
            updatedAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: sequelize_2.default.fn('NOW'),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('categories');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjIxMDMyNTUtY3JlYXRlLWNhdGVnb3J5LXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGFiYXNlL21pZ3JhdGlvbnMvMjAyMzAzMjIxMDMyNTUtY3JlYXRlLWNhdGVnb3J5LXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQWtEO0FBQ2xELGlEQUFnRDtBQUNoRCx5Q0FBa0U7QUFFbEUsMERBQWtDO0FBRWxDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixFQUFFLEVBQUUsQ0FBQyxjQUE4QixFQUFFLEVBQUU7UUFDbkMsT0FBTyxjQUFjLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtZQUM5QyxFQUFFLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTzthQUN4QjtZQUNELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO2dCQUN0QixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLEdBQUcsRUFBRSxJQUFJO2lCQUNWO2dCQUNELFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNELFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUMzQixTQUFTLEVBQUUsSUFBSTthQUNoQjtZQUNILE1BQU0sRUFBRTtnQkFDSixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFBLGlCQUFRLEVBQUMsaUJBQVUsQ0FBQyxDQUFDO2dCQUM3QyxZQUFZLEVBQUUsaUJBQVUsQ0FBQyxNQUFNO2FBQ2hDO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO2dCQUNwQixZQUFZLEVBQUUsbUJBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2FBQ2xDO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO2dCQUNwQixZQUFZLEVBQUUsbUJBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2FBQ2xDO1NBQ0YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQThCLEVBQUUsU0FBYyxFQUFFLEVBQUU7UUFDckQsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRixDQUFDIn0=