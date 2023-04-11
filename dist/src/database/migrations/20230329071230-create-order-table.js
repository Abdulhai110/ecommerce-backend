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
const helper_1 = require("../../helpers/helper");
const enum_1 = require("../../constants/enum");
module.exports = {
    up: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.createTable("orders", {
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
                allowNull: false
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
        yield queryInterface.dropTable("orders");
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjkwNzEyMzAtY3JlYXRlLW9yZGVyLXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGFiYXNlL21pZ3JhdGlvbnMvMjAyMzAzMjkwNzEyMzAtY3JlYXRlLW9yZGVyLXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUNBQXNEO0FBQ3RELGlEQUE2QztBQUM3QywrQ0FBMEU7QUFDMUUsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLEVBQUUsRUFBRSxDQUFPLGNBQThCLEVBQUUsU0FBYyxFQUFFLEVBQUU7UUFDM0QsTUFBTSxjQUFjLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUN6QyxFQUFFLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztnQkFDdkIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDL0IsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFVBQVUsRUFBRTtvQkFDVixLQUFLLEVBQUUsT0FBTztvQkFDZCxHQUFHLEVBQUUsSUFBSTtpQkFDVjtnQkFDRCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLFNBQVM7YUFDcEI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLEdBQUcsRUFBRSxJQUFJO2lCQUNWO2dCQUNELFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELE1BQU0sRUFBQztnQkFDTCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFBLGlCQUFRLEVBQUMsc0JBQWUsQ0FBQyxDQUFDO2dCQUNsRCxZQUFZLEVBQUUsc0JBQWUsQ0FBQyxPQUFPO2dCQUNyQyxTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELFVBQVUsRUFBQztnQkFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixZQUFZLEVBQUMsQ0FBQztnQkFDZCxTQUFTLEVBQUMsSUFBSTthQUNmO1lBQ0QsU0FBUyxFQUFDO2dCQUNSLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87Z0JBQ3ZCLFlBQVksRUFBQyxDQUFDO2dCQUNkLFNBQVMsRUFBQyxJQUFJO2FBQ2Y7WUFDRCxlQUFlLEVBQUM7Z0JBQ2QsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztnQkFDdkIsWUFBWSxFQUFDLENBQUM7Z0JBQ2QsU0FBUyxFQUFDLElBQUk7YUFDZjtZQUNELGFBQWEsRUFBQztnQkFDWixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFBLGlCQUFRLEVBQUMsd0JBQWlCLENBQUMsQ0FBQztnQkFDcEQsWUFBWSxFQUFFLHdCQUFpQixDQUFDLE9BQU87Z0JBQ3ZDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsWUFBWSxFQUFDO2dCQUNYLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87Z0JBQ3ZCLFlBQVksRUFBQyxDQUFDO2dCQUNkLFNBQVMsRUFBQyxJQUFJO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLEtBQUs7YUFDbkI7WUFDQyxTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFlBQVksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2dCQUNwRCxTQUFTLEVBQUUsS0FBSzthQUNuQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxJQUFJLEVBQUUsV0FBVztnQkFDakIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsK0NBQStDLENBQUM7Z0JBQ2hGLFNBQVMsRUFBRSxLQUFLO2FBQ25CO1NBQ0EsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsSUFBSSxFQUFFLENBQU8sY0FBOEIsRUFBRSxFQUFFO1FBQzdDLE1BQU0sY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUE7Q0FDRixDQUFDIn0=