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
        yield queryInterface.createTable("product_reviews", {
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
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            rating: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
            },
            comment: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
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
        yield queryInterface.dropTable("product_reviews");
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjQwNTQxMzAtY3JlYXRlLXByb2R1Y3RfcmV2aWV3LXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGFiYXNlL21pZ3JhdGlvbnMvMjAyMzAzMjQwNTQxMzAtY3JlYXRlLXByb2R1Y3RfcmV2aWV3LXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUNBQXNEO0FBRXRELE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixFQUFFLEVBQUUsQ0FBTyxjQUE4QixFQUFFLFNBQWMsRUFBRSxFQUFFO1FBQzNELE1BQU0sY0FBYyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtZQUNsRCxFQUFFLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztnQkFDdkIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO2dCQUN2QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRSxVQUFVO29CQUNqQixHQUFHLEVBQUUsSUFBSTtpQkFDVjtnQkFDRCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLFNBQVM7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLE9BQU87b0JBQ2QsR0FBRyxFQUFFLElBQUk7aUJBQ1Y7Z0JBQ0QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07Z0JBQ3RCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87Z0JBQ3ZCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07Z0JBQ3RCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxXQUFXO2dCQUNqQixZQUFZLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztnQkFDcEQsU0FBUyxFQUFFLEtBQUs7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFlBQVksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLCtDQUErQyxDQUFDO2dCQUNoRixTQUFTLEVBQUUsS0FBSzthQUNuQjtTQUNBLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQTtJQUVELElBQUksRUFBRSxDQUFPLGNBQThCLEVBQUUsRUFBRTtRQUM3QyxNQUFNLGNBQWMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUE7Q0FDRixDQUFDIn0=