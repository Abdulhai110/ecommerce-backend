"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
module.exports = {
    up: (queryInterface) => {
        return queryInterface.createTable('contacts', {
            id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            profileId: {
                allowNull: false,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                references: { model: 'profiles', key: 'id' },
                onDelete: 'CASCADE'
            },
            address: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            postalCode: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            state: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            country: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            zipcode: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                type: "TIMESTAMP",
                defaultValue: sequelize_2.default.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            updatedAt: {
                type: "TIMESTAMP",
                defaultValue: sequelize_2.default.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('contacts');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjAwNTM2MjItYWRkLWNvbnRhY3QtdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2UvbWlncmF0aW9ucy8yMDIzMDMyMDA1MzYyMi1hZGQtY29udGFjdC10YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUFrRTtBQUVsRSwwREFBa0M7QUFFbEMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLEVBQUUsRUFBRSxDQUFDLGNBQThCLEVBQUUsRUFBRTtRQUNuQyxPQUFPLGNBQWMsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQzFDLEVBQUUsRUFBRTtnQkFDQSxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDL0IsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGFBQWEsRUFBRSxJQUFJO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFNBQVMsRUFBQyxLQUFLO2dCQUNmLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUMvQixVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7Z0JBQzVDLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07Z0JBQ3RCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07Z0JBQ3RCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsVUFBVSxFQUFDO2dCQUNULElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07Z0JBQ3RCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsS0FBSyxFQUFDO2dCQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07Z0JBQ3RCLFNBQVMsRUFBQyxLQUFLO2FBQ2hCO1lBQ0QsT0FBTyxFQUFDO2dCQUNOLElBQUksRUFBQyxxQkFBUyxDQUFDLE1BQU07Z0JBQ3JCLFNBQVMsRUFBQyxLQUFLO2FBQ2hCO1lBQ0QsT0FBTyxFQUFDO2dCQUNOLElBQUksRUFBRyxxQkFBUyxDQUFDLE1BQU07Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsU0FBUyxFQUFDO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixZQUFZLEVBQUcsbUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3JELFNBQVMsRUFBQyxLQUFLO2FBQ2hCO1lBQ0QsU0FBUyxFQUFDO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixZQUFZLEVBQUUsbUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3BELFNBQVMsRUFBQyxLQUFLO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQThCLEVBQUUsU0FBYyxFQUFFLEVBQUU7UUFDckQsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRixDQUFDIn0=