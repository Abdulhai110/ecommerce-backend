import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
    ForeignKey,
    Sequelize,
  } from "sequelize";
  import { sequelize } from "../config/connection";
  import { UserTypeEnum } from "../constants/enum";
  import { enumKeys } from "../helpers/helper";
import { User } from "./user";
import { Profile } from "./profile";
  export class Contact extends Model<
    InferAttributes<Contact>,
    InferCreationAttributes<Contact>
  > {
    id: number | null;
    profileId: number;
    address: string;
    city: string;
    postalCode: string;
    state: string;
    country: string;
    zipcode: string;
    createdAt?: Date;
    updatedAt?: Date;
  
    // getFullname() {
    //     return [this.firstName, this.lastName].join(' ');
    // }
  }
  
  Contact.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        profileId: {
          allowNull:false,
          type: DataTypes.BIGINT.UNSIGNED,
          references: { model: Profile, key: 'id' },
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
    },
    {
      sequelize,
      timestamps: true,
      tableName: "contacts",
    }
  );
  