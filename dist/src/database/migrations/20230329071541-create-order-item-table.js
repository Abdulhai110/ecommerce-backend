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
        yield queryInterface.createTable("order-items", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            order_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "orders",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
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
            quantity: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
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
        yield queryInterface.dropTable("order-items");
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjkwNzE1NDEtY3JlYXRlLW9yZGVyLWl0ZW0tdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2UvbWlncmF0aW9ucy8yMDIzMDMyOTA3MTU0MS1jcmVhdGUtb3JkZXItaXRlbS10YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlDQUFzRDtBQUd0RCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsRUFBRSxFQUFFLENBQU8sY0FBOEIsRUFBRSxTQUFjLEVBQUUsRUFBRTtRQUMzRCxNQUFNLGNBQWMsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQzlDLEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxJQUFJO2FBQ2pCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7Z0JBQ0QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLEdBQUcsRUFBRSxJQUFJO2lCQUNWO2dCQUNELFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNELFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUUsV0FBVztnQkFDakIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3BELFNBQVMsRUFBRSxLQUFLO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLElBQUksRUFBRSxXQUFXO2dCQUNqQixZQUFZLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsQ0FBQztnQkFDaEYsU0FBUyxFQUFFLEtBQUs7YUFDbkI7U0FDQSxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUE7SUFFRCxJQUFJLEVBQUUsQ0FBTyxjQUE4QixFQUFFLEVBQUU7UUFDN0MsTUFBTSxjQUFjLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQTtDQUNGLENBQUMifQ==