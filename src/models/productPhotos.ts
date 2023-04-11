import { Sequelize, Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from "../config/connection";
interface ProductPhotoAttributes {
  id: number;
  product_id: number;
  photo_id: string;
  secure_url: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ProductPhotoCreationAttributes extends Optional<ProductPhotoAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class ProductPhoto extends Model<ProductPhotoAttributes, ProductPhotoCreationAttributes> implements ProductPhotoAttributes {
  public id!: number;
  public product_id!: number;
  public photo_id!: string;
  public secure_url!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

//   static associate(models: any) {
//     ProductPhoto.belongsTo(models.Product, { foreignKey: 'product_id' });
//   }
}


ProductPhoto.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      photo_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      secure_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    },
    {
      sequelize,
      tableName: 'product_photos',
      timestamps: false,
      // paranoid: false,
      // underscored: true,
    //   freezeTableName: true,
    }
)



