import { Model, InferAttributes, InferCreationAttributes } from "sequelize";
export declare class Profile extends Model<InferAttributes<Profile>, InferCreationAttributes<Profile>> {
    id: number | null;
    userId: number;
    photo_id: number | null;
    photo_secure_url: string | null;
    phoneno: string;
    createdAt?: Date;
    updatedAt?: Date;
}
