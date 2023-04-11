"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.createTable('profiles', {
            id: {
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                allowNull: false,
                type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
                references: { model: 'users', key: 'id' },
                onDelete: 'CASCADE'
            },
            photo_id: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            photo_secure_url: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
            phoneno: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            createdAt: {
                type: 'TIMESTAMP',
                defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            updatedAt: {
                type: 'TIMESTAMP',
                defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('profiles');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjAwNTE5MDQtYWRkLXByb2ZpbGUtdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2UvbWlncmF0aW9ucy8yMDIzMDMyMDA1MTkwNC1hZGQtcHJvZmlsZS10YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUE2RTtBQUU3RSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsRUFBRSxFQUFFLENBQUMsY0FBOEIsRUFBRSxFQUFFO1FBQ25DLE9BQU8sY0FBYyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDMUMsRUFBRSxFQUFFO2dCQUNBLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUMvQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsYUFBYSxFQUFFLElBQUk7YUFDdEI7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osU0FBUyxFQUFDLEtBQUs7Z0JBQ2YsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtnQkFDekMsUUFBUSxFQUFFLFNBQVM7YUFDdEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtnQkFDdEIsU0FBUyxFQUFFLElBQUk7YUFDaEI7WUFDRCxnQkFBZ0IsRUFBRTtnQkFDaEIsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtnQkFDdEIsU0FBUyxFQUFFLElBQUk7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDMUIsU0FBUyxFQUFDLElBQUk7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFlBQVksRUFBRSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztnQkFDcEQsU0FBUyxFQUFFLEtBQUs7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFlBQVksRUFBRSxxQkFBUyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsQ0FBQztnQkFDaEYsU0FBUyxFQUFFLEtBQUs7YUFDbkI7U0FFRixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsSUFBSSxFQUFFLENBQUMsY0FBOEIsRUFBRSxTQUFjLEVBQUUsRUFBRTtRQUNyRCxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGLENBQUMifQ==