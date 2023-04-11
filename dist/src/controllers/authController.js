"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.AuthController = void 0;
const controller_1 = require("./controller");
const user_1 = require("../models/user");
const joi_1 = __importStar(require("joi"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const helper_1 = require("../helpers/helper");
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const profile_1 = require("../models/profile");
class AuthController extends controller_1.Controller {
    constructor() {
        super();
    }
    static init() {
        if (this.instance == null) {
            this.instance = new AuthController();
        }
        return this.instance;
    }
    //    signup method 
    signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body)
            const schema = joi_1.default.object().keys({
                firstName: joi_1.default.string(),
                lastName: joi_1.default.string().optional().allow(''),
                email: joi_1.default.string().email().required(),
                password: joi_1.default.string()
            });
            let result;
            const { error, value } = schema.validate(req.body);
            if (error instanceof joi_1.ValidationError) {
                return res.Error(error.details[0].message);
            }
            //check user is exists or not
            const user = yield user_1.User.findOne({
                where: { email: req.body.email }
            });
            if (user != null) {
                return res.Error("User already exixts");
            }
            if (req.file) {
                result = yield cloudinary_1.default.v2.uploader.upload(req.file.path, {
                    folder: 'users',
                    width: 150,
                    height: 150,
                    crop: 'fill',
                });
            }
            const { firstName, lastName, email, password } = req.body;
            const newUser = yield user_1.User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            if (newUser && req.file) {
                yield profile_1.Profile.create({
                    userId: newUser.id,
                    photo_id: result.public_id,
                    photo_secure_url: result.secure_url,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
            if (!req.file) {
                yield profile_1.Profile.create({
                    userId: newUser.id,
                    // photo_id: result.public_id,
                    // photo_secure_url: result.secure_url,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
            newUser.password = undefined;
            // cookietoken(newUser, res);
            (0, helper_1.cookietoken)(newUser, res);
        });
    }
    // sign 
    Signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("signinn");
            console.log(req.body);
            const schema = joi_1.default.object().keys({
                email: joi_1.default.string().email().required(),
                password: joi_1.default.string().required()
            });
            const { error, value } = schema.validate(req.body);
            if (error instanceof joi_1.ValidationError) {
                return res.Error(error.details[0].message);
            }
            const { email, password } = req.body;
            console.log(req.body);
            if (!email || !password) {
                return res.Error("Please provide email password");
            }
            const user = yield user_1.User.findOne({ where: { email: email } });
            if (!user) {
                return res.Error("Please provide correct cradentials");
            }
            const isMatch = yield user.validPassword(password);
            if (!isMatch) {
                // return next(new customerror("Invalid email or password" ,400));
                return res.Error("Please provide correct email and password");
            }
            (0, helper_1.cookietoken)(user, res);
        });
    }
    // logout
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.cookie('token', 'null', {
                expires: new Date(Date.now()),
                httpOnly: true
            });
            res.Success("Logout successfully");
        });
    }
    // Forgot password 
    ForgotPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            if (!email) {
                // return next(new customerror("Please provide email", 400));
                return res.Error("Please provide email");
            }
            const user = yield user_1.User.findOne({ where: { email: email } });
            if (!user) {
                return res.Error("Invalid email");
            }
            const token = yield user.getForgotpasswordToken();
            // console.log("outt tokeeennn",token)
            user.ForgotpasswordToken = token;
            yield user.save();
            // const url:string = `${req.protocol}://${req.get("host")}/api/public/auth/token/validate/${token}`;
            const url = `http://localhost:4200/user/reset/${token}`;
            // http://localhost:4200/user/reset
            // const url =  token;
            // const message = `copy paste this link to reset your password \n\n ${url}`;
            const html = `<p>click on me</p><a href=${url}>click me</a>`;
            const message = `copy this token\n\n ${token}`;
            // const html = `<p>copy paste this token in reset form</p><h2>copy me</h2> <h1>${token}</h1>`;
            try {
                yield (0, helper_1.sendmail)({
                    subject: "Reset Password",
                    text: message,
                    html
                }); //send mail
                res.status(200).json({
                    success: true,
                    data: { message: "Token sent to email" }
                });
            }
            catch (err) {
                console.log(err);
                user.ForgotpasswordToken = undefined;
                user.ForgotpasswordExpires = undefined;
                yield user.save();
                return res.Error(`Email could not be sent ${err}`);
            }
        });
    }
    // reset password
    resetpassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.params);
            const { password, confirmPassword } = req.body;
            if (!password || !confirmPassword) {
                return res.Error("Please provide password and confirm password");
            }
            if (password !== confirmPassword) {
                return res.Error("Password and confirm password do not match");
            }
            const resetPasswordToken = node_crypto_1.default.createHash('sha256').update(req.params.token).digest('hex');
            const user = yield user_1.User.findOne({
                where: {
                    [sequelize_1.Op.and]: [
                        { ForgotpasswordToken: req.params.token },
                    ]
                }
            });
            console.log("Userrrr", user);
            if (!user || (user && (0, moment_1.default)(user.ForgotpasswordExpires).isBefore((0, moment_1.default)()))) {
                return res.Error("Invalid token");
            }
            user.password = password;
            user.ForgotpasswordToken = undefined;
            user.ForgotpasswordExpires = undefined;
            yield user.save();
            res.status(200).json({
                success: true,
                data: { message: "Password reset successfully" }
            });
        });
    }
    ;
    validatetoken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token } = req.params;
            if (!token) {
                return res.Error("Please provide a token");
            }
            const user = yield user_1.User.findOne({ where: { ForgotpasswordToken: token } });
            if (!user) {
                return res.Error("invalid token");
            }
            return res.Success("varified");
        });
    }
    // check is token is validate or not 
    isUserIsValid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.cookies.token || (typeof req.headers['authorization'] === 'string' ? req.headers['authorization'].replace('Bearer ', '') : '');
            if (!token) {
                return res.Error("You are not a valid user");
            }
            try {
                const decode = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                const user = yield user_1.User.findByPk(decode.id);
                if (!user)
                    return res.Error("You are not a valid user");
                // req.user = user;
                return res.Success("You are a valid user", user);
            }
            catch (err) {
                return res.Error("invalid");
            }
        });
    }
}
AuthController.instance = null;
exports.AuthController = AuthController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBeUM7QUFDekMseUNBQXNDO0FBQ3RDLDJDQUFxRDtBQUNyRCw4REFBaUM7QUFFakMsNERBQW1DO0FBQ25DLDhDQUF3RDtBQUN4RCx5Q0FBK0I7QUFDL0Isb0RBQTRCO0FBQzVCLGdFQUFnRDtBQUNoRCwrQ0FBNEM7QUFDNUMsTUFBYSxjQUFlLFNBQVEsdUJBQVU7SUFHMUM7UUFDSSxLQUFLLEVBQUUsQ0FBQTtJQUNYLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSTtRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFBO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxvQkFBb0I7SUFFZCxNQUFNLENBQUMsR0FBbUIsRUFBRyxHQUFvQjs7WUFDbkQsd0JBQXdCO1lBQ3hCLE1BQU0sTUFBTSxHQUFHLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLFNBQVMsRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFO2dCQUN2QixRQUFRLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzNDLEtBQUssRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxRQUFRLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRTthQUN6QixDQUFDLENBQUM7WUFFSCxJQUFJLE1BQVUsQ0FBQztZQUNmLE1BQU0sRUFB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