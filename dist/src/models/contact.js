"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
const profile_1 = require("./profile");
class Contact extends sequelize_1.Model {
}
exports.Contact = Contact;
Contact.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    profileId: {
        allowNull: false,
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        references: { model: profile_1.Profile, key: 'id' },
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
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    sequelize: connection_1.sequelize,
    timestamps: true,
    tableName: "contacts",
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvY29udGFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FPcUI7QUFDbkIscURBQWlEO0FBSW5ELHVDQUFvQztBQUNsQyxNQUFhLE9BQVEsU0FBUSxpQkFHNUI7Q0FlQTtBQWxCRCwwQkFrQkM7QUFFRCxPQUFPLENBQUMsSUFBSSxDQUNWO0lBQ0ksRUFBRSxFQUFFO1FBQ0EsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDL0IsVUFBVSxFQUFFLElBQUk7UUFDaEIsYUFBYSxFQUFFLElBQUk7S0FDdEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxTQUFTLEVBQUMsS0FBSztRQUNmLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQy9CLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7UUFDekMsUUFBUSxFQUFFLFNBQVM7S0FDcEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELFVBQVUsRUFBQztRQUNULElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxLQUFLLEVBQUM7UUFDSixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBQyxLQUFLO0tBQ2hCO0lBQ0QsT0FBTyxFQUFDO1FBQ04sSUFBSSxFQUFDLHFCQUFTLENBQUMsTUFBTTtRQUNyQixTQUFTLEVBQUMsS0FBSztLQUNoQjtJQUNELE9BQU8sRUFBQztRQUNOLElBQUksRUFBRyxxQkFBUyxDQUFDLE1BQU07UUFDdkIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxTQUFTLEVBQUM7UUFDUixJQUFJLEVBQUUsV0FBVztRQUNqQixZQUFZLEVBQUcscUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDckQsU0FBUyxFQUFDLEtBQUs7S0FDaEI7SUFDRCxTQUFTLEVBQUM7UUFDUixJQUFJLEVBQUUsV0FBVztRQUNqQixZQUFZLEVBQUUscUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDcEQsU0FBUyxFQUFDLEtBQUs7S0FDaEI7Q0FDSixFQUNEO0lBQ0UsU0FBUyxFQUFULHNCQUFTO0lBQ1QsVUFBVSxFQUFFLElBQUk7SUFDaEIsU0FBUyxFQUFFLFVBQVU7Q0FDdEIsQ0FDRixDQUFDIn0=