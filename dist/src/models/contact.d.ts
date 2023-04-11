import { Model, InferAttributes, InferCreationAttributes } from "sequelize";
export declare class Contact extends Model<InferAttributes<Contact>, InferCreationAttributes<Contact>> {
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
}
