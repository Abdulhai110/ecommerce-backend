import { QueryInterface } from 'sequelize';
import  ProductReview from '../../models/review';

export = {
  up: async (queryInterface: QueryInterface) => {
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

    await ProductReview.bulkCreate(productReviewData);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('product_reviews', {});
  }
};