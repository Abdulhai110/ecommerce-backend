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
exports.User = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const enum_1 = require("../constants/enum");
const helper_1 = require("../helpers/helper");
const profile_1 = require("./profile");
const contact_1 = require("./contact");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const review_1 = __importDefault(require("./review"));
class User extends sequelize_1.Model {
    getFullname() {
        return [this.firstName, this.lastName].join(" ");
    }
    validPassword(password) {
        return bcryptjs_1.default.compareSync(password, this.password);
    }
    getJwtToken() {
        return jsonwebtoken_1.default.sign({ id: this.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_ExpiresIn });
    }
    getForgotpasswordToken() {
        const token = node_crypto_1.default.randomBytes(20).toString('hex');
        this.ForgotpasswordToken = node_crypto_1.default.createHash('sha256').update(token).digest('hex');
        this.ForgotpasswordExpires = (Date.now() + 10 * 60 * 1000);
        // console.log("innnnnn token" , token)
        // console.log(this.ForgotpasswordExpires)
        return token;
    }
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    email: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: true,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM(...(0, helper_1.enumKeys)(enum_1.UserTypeEnum)),
        defaultValue: enum_1.UserTypeEnum.Customer,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(1000),
        allowNull: false,
    },
    ForgotpasswordToken: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    },
    ForgotpasswordExpires: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    createdAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize_1.Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
    updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize_1.Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: false,
    },
}, {
    hooks: {
        beforeCreate: (user) => __awaiter(void 0, void 0, void 0, function* () {
            if (user.password) {
                const salt = yield bcryptjs_1.default.genSaltSync(10);
                user.password = bcryptjs_1.default.hashSync(user.password, salt);
            }
        }),
        beforeUpdate: (user) => __awaiter(void 0, void 0, void 0, function* () {
            if (user.password) {
                const salt = yield bcryptjs_1.default.genSaltSync(10);
                user.password = bcryptjs_1.default.hashSync(user.password, salt);
            }
        }),
        beforeDestroy: (user) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("userrrr deletedd");
            try {
                console.log(user);
                yield profile_1.Profile.destroy({ where: { userId: user.id } });
                console.log("profile deleted");
            }
            catch (err) {
                console.log("error in del profile");
            }
        })
        //end hooks
    },
    sequelize: connection_1.sequelize,
    timestamps: false,
    tableName: "users",
});
User.hasOne(profile_1.Profile, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
profile_1.Profile.belongsTo(User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
User.hasMany(contact_1.Contact, {
    foreignKey: 'userId'
});
contact_1.Contact.belongsTo(User);
User.hasOne(review_1.default, {
    foreignKey: 'user_id'
});
review_1.default.belongsTo(User, {
    foreignKey: 'user_id'
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FPbUI7QUFDbkIscURBQWlEO0FBQ2pELHdEQUF5QztBQUN6Qyw0Q0FBaUQ7QUFDakQsOENBQTZDO0FBQzdDLHVDQUFvQztBQUNwQyx1Q0FBb0M7QUFDcEMsZ0VBQWdDO0FBQ2hDLDhEQUFpQztBQUVqQyxzREFBcUM7QUFDckMsTUFBYSxJQUFLLFNBQVEsaUJBR3pCO0lBWUMsV0FBVztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFhO1FBQ3pCLE9BQU8sa0JBQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sc0JBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsc0JBQXNCO1FBQ3BCLE1BQU0sS0FBSyxHQUFHLHFCQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcscUJBQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMscUJBQXFCLEdBQUcs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