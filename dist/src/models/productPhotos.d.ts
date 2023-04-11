import { Model, Optional } from 'sequelize';
interface ProductPhotoAttributes {
    id: number;
    product_id: number;
    photo_id: string;
    secure_url: string;
    createdAt: Date;
    updatedAt: Date;
}
interface ProductPhotoCreationAttributes extends Optional<ProductPhotoAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
export declare class ProductPhoto extends Model<ProductPhotoAttributes, ProductPhotoCreationAttributes> implements ProductPhotoAttributes {
    id: number;
    product_id: number;
    photo_id: string;
    secure_url: string;
    createdAt: Date;
    updatedAt: Date;
}
export {};
