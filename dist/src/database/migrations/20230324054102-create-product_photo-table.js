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
        yield queryInterface.createTable("product_photos", {
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
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
            updatedAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: Sequelize.fn("NOW"),
            },
        });
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.dropTable("product_photos");
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjQwNTQxMDItY3JlYXRlLXByb2R1Y3RfcGhvdG8tdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2UvbWlncmF0aW9ucy8yMDIzMDMyNDA1NDEwMi1jcmVhdGUtcHJvZHVjdF9waG90by10YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlDQUFzRDtBQUV0RCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsRUFBRSxFQUFFLENBQU8sY0FBOEIsRUFBRSxTQUFjLEVBQUUsRUFBRTtRQUMzRCxNQUFNLGNBQWMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7WUFDakQsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87Z0JBQ3ZCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztnQkFDdkIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFVBQVUsRUFBRTtvQkFDVixLQUFLLEVBQUUsVUFBVTtvQkFDakIsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7Z0JBQ0QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07Z0JBQ3RCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07Z0JBQ3RCLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7Z0JBQ3BCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixZQUFZLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzthQUNyRDtZQUNELFNBQVMsRUFBRTtnQkFDVCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2FBQ2xDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsSUFBSSxFQUFFLENBQU8sY0FBOEIsRUFBRSxFQUFFO1FBQzdDLE1BQU0sY0FBYyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUMsQ0FBQTtDQUNGLENBQUMifQ==