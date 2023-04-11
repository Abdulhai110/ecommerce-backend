"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
module.exports = {
    up: (queryInterface) => {
        return queryInterface.createTable("products", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
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
                    model: "categories",
                    key: "id",
                },
                onDelete: "CASCADE"
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
                    model: "users",
                    key: "id",
                },
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize_2.default.literal("CURRENT_TIMESTAMP"),
            },
            updatedAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: sequelize_2.default.fn("NOW"),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("products");
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjQwNTI2MjEtY3JlYXRlLXByb2R1Y3QtdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2UvbWlncmF0aW9ucy8yMDIzMDMyNDA1MjYyMS1jcmVhdGUtcHJvZHVjdC10YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLHlDQUFrRTtBQUVsRSwwREFBa0M7QUFFbEMsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLEVBQUUsRUFBRSxDQUFDLGNBQThCLEVBQUUsRUFBRTtRQUNyQyxPQUFPLGNBQWMsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQzVDLEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxJQUFJO2FBQ2pCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO2dCQUN0QixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZO29CQUNuQixHQUFHLEVBQUUsSUFBSTtpQkFDVjtnQkFDRCxRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO2dCQUN0QixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxLQUFLO2dCQUNyQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsWUFBWSxFQUFFLENBQUM7YUFDaEI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztnQkFDdkIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUMvQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRSxPQUFPO29CQUNkLEdBQUcsRUFBRSxJQUFJO2lCQUNWO2FBQ0Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFlBQVksRUFBRSxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzthQUNyRDtZQUNELFNBQVMsRUFBRTtnQkFDVCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLG1CQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzthQUNsQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUE4QixFQUFFLFNBQWMsRUFBRSxFQUFFO1FBQ3ZELE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQyJ9