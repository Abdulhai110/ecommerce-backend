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
const review_1 = __importDefault(require("../../models/review"));
module.exports = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        const productReviewData = [
            {
                product_id: 1,
                user_id: 1,
                name: 'John',
                rating: 4,
                comment: 'Great product!',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                product_id: 1,
                user_id: 2,
                name: 'Jane',
                rating: 5,
                comment: 'The best product ever!',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                product_id: 2,
                user_id: 3,
                name: 'Bob',
                rating: 3,
                comment: 'It could be better.',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        yield review_1.default.bulkCreate(productReviewData);
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('product_reviews', {});
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMzAzMjUwNDE1MzItY3JlYXRlLXByb2R1Y3QtcmV2aWV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9zZWVkZXJzLzIwMjMwMzI1MDQxNTMyLWNyZWF0ZS1wcm9kdWN0LXJldmlld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLGlFQUFpRDtBQUVqRCxpQkFBUztJQUNQLEVBQUUsRUFBRSxDQUFPLGNBQThCLEVBQUUsRUFBRTtRQUMzQyxNQUFNLGlCQUFpQixHQUFHO1lBQ3hCO2dCQUNFLFVBQVUsRUFBRSxDQUFDO2dCQUNiLE9BQU8sRUFBRSxDQUFDO2dCQUNWLElBQUksRUFBRSxNQUFNO2dCQUNaLE1BQU0sRUFBRSxDQUFDO2dCQUNULE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDckIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO2FBQ3RCO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osTUFBTSxFQUFFLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLHdCQUF3QjtnQkFDakMsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7YUFDdEI7WUFDRDtnQkFDRSxVQUFVLEVBQUUsQ0FBQztnQkFDYixPQUFPLEVBQUUsQ0FBQztnQkFDVixJQUFJLEVBQUUsS0FBSztnQkFDWCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTthQUN0QjtTQUNGLENBQUM7UUFFRixNQUFNLGdCQUFhLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFBO0lBRUQsSUFBSSxFQUFFLENBQU8sY0FBOEIsRUFBRSxFQUFFO1FBQzdDLE1BQU0sY0FBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUE7Q0FDRixDQUFDIn0=