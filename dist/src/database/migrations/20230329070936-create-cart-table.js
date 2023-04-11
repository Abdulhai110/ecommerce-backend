"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.createTable("cart", {
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
                    model: "products",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
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
            quantity: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            total: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            updatedAt: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                allowNull: false
            }
        });
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.dropTable("cart");
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjkwNzA5MzYtY3JlYXRlLWNhcnQtdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2UvbWlncmF0aW9ucy8yMDIzMDMyOTA3MDkzNi1jcmVhdGUtY2FydC10YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlDQUFzRDtBQUV0RCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsRUFBRSxFQUFFLENBQU8sY0FBOEIsRUFBRSxTQUFjLEVBQUUsRUFBRTtRQUMzRCxNQUFNLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxJQUFJO2FBQ2pCO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLEdBQUcsRUFBRSxJQUFJO2lCQUNWO2dCQUNELFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDL0IsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFVBQVUsRUFBRTtvQkFDVixLQUFLLEVBQUUsT0FBTztvQkFDZCxHQUFHLEVBQUUsSUFBSTtpQkFDVjtnQkFDRCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLFNBQVM7YUFDcEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztnQkFDdkIsU0FBUyxFQUFFLEtBQUs7YUFDakI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztnQkFDdkIsU0FBUyxFQUFFLEtBQUs7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFlBQVksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2dCQUNwRCxTQUFTLEVBQUUsS0FBSzthQUNuQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxJQUFJLEVBQUUsV0FBVztnQkFDakIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsK0NBQStDLENBQUM7Z0JBQ2hGLFNBQVMsRUFBRSxLQUFLO2FBQ25CO1NBQ0EsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsSUFBSSxFQUFFLENBQU8sY0FBOEIsRUFBRSxFQUFFO1FBQzdDLE1BQU0sY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUE7Q0FDRixDQUFDIn0=