"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjkwNzE2MjgtY3JlYXRlLXBheW1lbnQtaW5mby10YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zLzIwMjMwMzI5MDcxNjI4LWNyZWF0ZS1wYXltZW50LWluZm8tdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDtBQUN6RCxnREFBZ0Q7QUFDaEQsMERBQTBEO0FBQzFELHFCQUFxQjtBQUNyQixvRUFBb0U7QUFDcEUsb0RBQW9EO0FBQ3BELGNBQWM7QUFDZCxtQ0FBbUM7QUFDbkMsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQiw0QkFBNEI7QUFDNUIsV0FBVztBQUNYLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLFdBQVc7QUFDWCxzQkFBc0I7QUFDdEIsMkNBQTJDO0FBQzNDLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2IsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQixXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCLG1DQUFtQztBQUNuQyw0QkFBNEI7QUFDNUIsV0FBVztBQUNYLGlCQUFpQjtBQUNqQiw4REFBOEQ7QUFDOUQsa0RBQWtEO0FBQ2xELDRCQUE0QjtBQUM1QixXQUFXO0FBQ1gscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QixnRUFBZ0U7QUFDaEUsMkJBQTJCO0FBQzNCLFNBQVM7QUFDVCxtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLDRGQUE0RjtBQUM1RiwyQkFBMkI7QUFDM0IsUUFBUTtBQUNSLFVBQVU7QUFDVixPQUFPO0FBRVAsc0RBQXNEO0FBQ3RELGlEQUFpRDtBQUNqRCxPQUFPO0FBQ1AsS0FBSyJ9