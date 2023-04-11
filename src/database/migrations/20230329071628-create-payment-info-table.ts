// import { QueryInterface, DataTypes } from "sequelize";
// import {enumKeys} from '../../helpers/helper'
// import { OrderStatusEnum } from '../../constants/enum';
// module.exports = {
//   up: async (queryInterface: QueryInterface, Sequelize: any) => {
//     await queryInterface.createTable("payment", {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       user_id: {
//         type: DataTypes.BIGINT.UNSIGNED,
//         allowNull: false,
//         references: {
//           model: "users",
//           key: "id",
//         },
//         onUpdate: "CASCADE",
//         onDelete: "CASCADE",
//       },
//       address_id: {
//         type: DataTypes.BIGINT.UNSIGNED,
//         allowNull: false,
//         references: {
//           model: "contacts",
//           key: "id",
//         },
//         onUpdate: "CASCADE",
//         onDelete: "CASCADE",
//       },
//       total: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       status:{
//         type: DataTypes.ENUM(...enumKeys(OrderStatusEnum)),
//         defaultValue: OrderStatusEnum.pending, 
//         allowNull: false,
//       },
//       createdAt: {
//         type: 'TIMESTAMP',
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//         allowNull: false
//     },
//     updatedAt: {
//         type: 'TIMESTAMP',
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
//         allowNull: false
//     }
//     });
//   },

//   down: async (queryInterface: QueryInterface) => {
//     await queryInterface.dropTable("payment");
//   },
// };
