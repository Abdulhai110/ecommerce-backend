import { Model } from "sequelize";
interface ProductAttributes {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    brand: string;
    ratings: number;
    numberofreviews: number;
    user_id: number;
    createdAt: Date;
    updatedAt: Date;
}
declare class Product extends Model<ProductAttributes> implements ProductAttributes {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    brand: string;
    ratings: number;
    numberofreviews: number;
    user_id: number;
    createdAt: Date;
    updatedAt: Date;
}
export { Product };
