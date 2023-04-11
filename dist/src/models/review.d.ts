import { Model } from "sequelize";
export interface ProductReviewAttributes {
    id: number;
    product_id: number;
    user_id: number;
    name?: string;
    rating?: number;
    comment?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare class ProductReview extends Model<ProductReviewAttributes> implements ProductReviewAttributes {
    id: number;
    product_id: number;
    user_id: number;
    name?: string;
    rating?: number;
    comment?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export default ProductReview;
