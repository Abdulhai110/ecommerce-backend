import { StatusEnum } from '../../constants/enum';
import { enumKeys } from '../../helpers/helper';
import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

import Sequelize from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface) => {
      return queryInterface.createTable('categories', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        parentId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'categories',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        description: {
          type: DataTypes.STRING(250),
          allowNull: true
        },
      status: {
          type: DataTypes.ENUM(...enumKeys(StatusEnum)),
          defaultValue: StatusEnum.Active
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.fn('NOW'),
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.fn('NOW'),
        },
      });
  },
  down: (queryInterface: QueryInterface, Sequelize: any) => {
      return queryInterface.dropTable('categories');
  }
};
