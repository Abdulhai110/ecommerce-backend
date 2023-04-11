"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const helper_1 = require("../../helpers/helper");
const enum_1 = require("../../constants/enum");
const sequelize_2 = __importDefault(require("sequelize"));
module.exports = {
    up: (queryInterface) => {
        return queryInterface.createTable('users', {
            id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            firstName: {
                type: sequelize_1.DataTypes.STRING(50),
                validate: {
                    min: 5,
                    max: 16
                }
            },
            lastName: {
                type: sequelize_1.DataTypes.STRING(50)
            },
            email: {
                type: sequelize_1.DataTypes.STRING(150),
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            role: {
                type: sequelize_1.DataTypes.ENUM(...(0, helper_1.enumKeys)(enum_1.UserTypeEnum)),
                defaultValue: enum_1.UserTypeEnum.Customer,
                allowNull: false,
            },
            password: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false,
            },
            ForgotpasswordToken: {
                type: sequelize_1.DataTypes.STRING(200),
                allowNull: true
            },
            ForgotpasswordExpires: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            createdAt: {
                type: 'TIMESTAMP',
                defaultValue: sequelize_2.default.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            updatedAt: {
                type: 'TIMESTAMP',
                defaultValue: sequelize_2.default.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMTkwNzE0MjEtYWRkLXVzZXItdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2UvbWlncmF0aW9ucy8yMDIzMDMxOTA3MTQyMS1hZGQtdXNlci10YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLHlDQUFrRTtBQUNsRSxpREFBNkM7QUFDN0MsK0NBQW9EO0FBQ3BELDBEQUFrQztBQUNsQyxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsRUFBRSxFQUFFLENBQUMsY0FBOEIsRUFBRSxFQUFFO1FBQ25DLE9BQU8sY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDdkMsRUFBRSxFQUFFO2dCQUNBLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUMvQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsYUFBYSxFQUFFLElBQUk7YUFDdEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDMUIsUUFBUSxFQUFDO29CQUNQLEdBQUcsRUFBQyxDQUFDO29CQUNMLEdBQUcsRUFBQyxFQUFFO2lCQUNQO2FBQ0o7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzthQUM3QjtZQUVELEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUMzQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsTUFBTSxFQUFDLElBQUk7Z0JBQ1gsUUFBUSxFQUFFO29CQUNSLE9BQU8sRUFBQyxJQUFJO2lCQUNiO2FBQ0o7WUFDRCxJQUFJLEVBQUM7Z0JBQ0gsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBQSxpQkFBUSxFQUFDLG1CQUFZLENBQUMsQ0FBQztnQkFDL0MsWUFBWSxFQUFFLG1CQUFZLENBQUMsUUFBUTtnQkFDbkMsU0FBUyxFQUFFLEtBQUs7YUFDakI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsU0FBUyxFQUFFLEtBQUs7YUFFbkI7WUFFRCxtQkFBbUIsRUFBQztnQkFDbEIsSUFBSSxFQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDNUIsU0FBUyxFQUFDLElBQUk7YUFDZjtZQUNELHFCQUFxQixFQUFFO2dCQUNyQixJQUFJLEVBQUMscUJBQVMsQ0FBQyxJQUFJO2dCQUNuQixTQUFTLEVBQUMsSUFBSTthQUNmO1lBRUQsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxXQUFXO2dCQUNqQixZQUFZLEVBQUUsbUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3BELFNBQVMsRUFBRSxLQUFLO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLElBQUksRUFBRSxXQUFXO2dCQUNqQixZQUFZLEVBQUUsbUJBQVMsQ0FBQyxPQUFPLENBQUMsK0NBQStDLENBQUM7Z0JBQ2hGLFNBQVMsRUFBRSxLQUFLO2FBQ25CO1NBRUYsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQThCLEVBQUUsU0FBYyxFQUFFLEVBQUU7UUFDckQsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRixDQUFDIn0=