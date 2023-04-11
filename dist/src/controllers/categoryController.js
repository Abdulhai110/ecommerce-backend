"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const joi_1 = __importDefault(require("joi"));
const sequelize_1 = require("sequelize");
const category_1 = __importDefault(require("../models/category"));
const cloudinary = require('cloudinary').v2;
const connection_1 = require("../config/connection");
class CategoryController {
    constructor() {
    }
    static init() {
        if (this.instance == null) {
            this.instance = new CategoryController();
        }
        return this.instance;
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield category_1.default.findAll();
            res.Success("ok", data);
        });
    }
    //store category
    storeCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Schema = joi_1.default.object().keys({
                name: joi_1.default.string().required(),
            });
            const { error, value } = Schema.validate(req.body);
            if (error instanceof sequelize_1.ValidationError) {
                res.Error(error.details[0].message);
                return;
            }
            console.log(req.body);
            const categoryDate = {
                name: req.body.name,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const transaction = yield connection_1.sequelize.transaction();
            try {
                const instance = yield category_1.default.create(categoryDate, { transaction });
                yield transaction.commit();
                return res.Success('category added successfully');
            }
            catch (e) {
                yield transaction.rollback();
                console.log('Rollback Error', e);
                return res.Error("Error in created category");
            }
        });
    }
    UpdateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Schema = joi_1.default.object().keys({
                name: joi_1.default.string().required(),
            });
            const { error, value } = Schema.validate(req.body);
            if (error instanceof sequelize_1.ValidationError) {
                res.Error(error.details[0].message);
                return;
            }
            const cat = yield category_1.default.findByPk(req.params.id);
            if (!cat) {
                return res.Success("no category found");
            }
            const categoryDate = {
                name: req.body.name,
                updatedAt: new Date(),
            };
            const transaction = yield connection_1.sequelize.transaction();
            try {
                const instance = yield category_1.default.update(categoryDate, { where: {
                        id: cat.id
                    } });
                yield transaction.commit();
                return res.Success('category updated successfully');
            }
            catch (e) {
                yield transaction.rollback();
                console.log('Rollback Error', e);
                return res.Error("Error in updated category");
            }
        });
    }
    // delete category 
    DelCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield category_1.default.destroy({ where: {
                        id: req.params.id
                    } });
            }
            catch (e) {
                console.log(e);
                res.Error("Error in del Category");
            }
            return res.Success("record del successfully");
        });
    }
}
CategoryController.instance = null;
exports.CategoryController = CategoryController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NhdGVnb3J5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSw4Q0FBc0I7QUFDdEIseUNBQTRDO0FBQzVDLGtFQUEwQztBQUMxQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzVDLHFEQUFpRDtBQUNqRCxNQUFhLGtCQUFrQjtJQUczQjtJQUVBLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSTtRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUE7U0FDM0M7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUVLLElBQUksQ0FBQyxHQUFtQixFQUFDLEdBQW9COztZQUMvQyxJQUFJLElBQUksR0FBRyxNQUFNLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDM0IsQ0FBQztLQUFBO0lBRUQsZ0JBQWdCO0lBQ1YsYUFBYSxDQUFDLEdBQW1CLEVBQUMsR0FBb0I7O1lBRXhELE1BQU0sTUFBTSxHQUFHLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLElBQUksRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO2FBQ2hDLENBQUMsQ0FBQztZQUNILE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEQsSUFBSSxLQUFLLFlBQVksMkJBQWUsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNuQyxPQUFNO2FBQ1Q7WUFHRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixNQUFNLFlBQVksR0FBRztnQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDbkIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7YUFFeEIsQ0FBQTtZQUVELE1BQU0sV0FBVyxHQUFHLE1BQU0sc0JBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsRCxJQUFJO2dCQUVBLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtnQkFDckUsTUFBTSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQzFCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2FBRXJEO1lBQUMsT0FBTyxDQUFNLEVBQUU7Z0JBQ2IsTUFBTSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO2FBQ2hEO1FBRUwsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEdBQW1CLEVBQUMsR0FBb0I7O1lBRXpELE1BQU0sTUFBTSxHQUFHLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLElBQUksRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO2FBQ2hDLENBQUMsQ0FBQztZQUNILE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEQsSUFBSSxLQUFLLFlBQVksMkJBQWUsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNuQyxPQUFNO2FBQ1Q7WUFHRixNQUFNLEdBQUcsR0FBRyxNQUFPLGtCQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFcEQsSUFBRyxDQUFDLEdBQUcsRUFBQztnQkFDSCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTthQUMzQztZQUVBLE1BQU0sWUFBWSxHQUFHO2dCQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUNuQixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7YUFDeEIsQ0FBQTtZQUVELE1BQU0sV0FBVyxHQUFHLE1BQU0sc0JBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsRCxJQUFJO2dCQUVBLE1BQU0sUUFBUSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFHLEVBQUMsS0FBSyxFQUFDO3dCQUN6RCxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUU7cUJBQ2IsRUFBQyxDQUFDLENBQUE7Z0JBQ0gsTUFBTSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQzFCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2FBRXZEO1lBQUMsT0FBTyxDQUFNLEVBQUU7Z0JBQ2IsTUFBTSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO2FBQ2hEO1FBRUwsQ0FBQztLQUFBO0lBRUQsbUJBQW1CO0lBQ2IsV0FBVyxDQUFDLEdBQW1CLEVBQUMsR0FBb0I7O1lBRXhELElBQUc7Z0JBQ0QsTUFBTSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBQzt3QkFDMUIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtxQkFDcEIsRUFBQyxDQUFDLENBQUE7YUFFSjtZQUNELE9BQU0sQ0FBQyxFQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO2FBQ25DO1lBRUQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBOztBQTlHYywyQkFBUSxHQUE4QixJQUFJLENBQUM7QUFEakQsZ0RBQWtCIn0=