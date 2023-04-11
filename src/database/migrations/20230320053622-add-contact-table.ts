import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

import Sequelize from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface) => {
      return queryInterface.createTable('contacts', {
          id: {
              type: DataTypes.BIGINT.UNSIGNED,
              primaryKey: true,
              autoIncrement: true,
          },
          profileId: {
            allowNull:false,
            type: DataTypes.BIGINT.UNSIGNED,
            references: { model: 'profiles', key: 'id' },
            onDelete: 'CASCADE'
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          city: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          postalCode:{
            type: DataTypes.STRING,
            allowNull: false
          },
          state:{
            type: DataTypes.STRING,
            allowNull:false
          },
          country:{
            type:DataTypes.STRING,
            allowNull:false
          },
          zipcode:{
            type : DataTypes.STRING,
            allowNull: false
          },
          createdAt:{
            type: "TIMESTAMP",
            defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull:false
          },
          updatedAt:{
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull:false
          }
      });
  },
  down: (queryInterface: QueryInterface, Sequelize: any) => {
      return queryInterface.dropTable('contacts');
  }
};
