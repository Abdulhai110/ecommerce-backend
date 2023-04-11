import { Model, InferAttributes, InferCreationAttributes } from "sequelize";
import { StatusEnum } from "../constants/enum";
declare class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
    id: number;
    name: string;
    parentId: number | null;
    description: string;
    status: StatusEnum;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Category;
