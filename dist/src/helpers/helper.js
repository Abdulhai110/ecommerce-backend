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
exports.sendmail = exports.cookietoken = exports.uploadFiles = exports.uploads = exports.enumKeys = exports.Helper = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class Helper {
}
exports.Helper = Helper;
function enumKeys(data) {
    const arrayobjects = [];
    for (const [propertyKey, propertyValue] of Object.entries(data)) {
        arrayobjects.push(propertyValue.toString());
    }
    return arrayobjects;
}
exports.enumKeys = enumKeys;
// multer config start 
function uploads() {
    const storagePath = path_1.default.resolve('./', 'storage', 'users');
    const storage = multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, storagePath);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.jpg';
            cb(null, file.fieldname + '-' + uniqueSuffix);
        }
    });
    return (0, multer_1.default)({ storage: storage });
}
exports.uploads = uploads;
//upload multiple images
function uploadFiles() {
    const storagePath = path_1.default.resolve('./', 'storage', 'products');
    const storage = multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, storagePath);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + '.jpg';
            cb(null, file.fieldname + "-" + uniqueSuffix);
        },
    });
    return (0, multer_1.default)({ storage: storage });
}
exports.uploadFiles = uploadFiles;
;
// cookie helper function 
function cookietoken(user, res) {
    const token = user.getJwtToken();
    const options = {
        expiresIn: new Date(Date.now() + process.env.COOKIE_TIMEOUT || 2 * 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    user.password = undefined;
    user.ForgotpasswordExpires = undefined;
    user.ForgotpasswordToken = undefined;
    res.status(200).cookie('token', token, options).json({
        success: true,
        token: token,
        data: user
    });
}
exports.cookietoken = cookietoken;
// send mail helper 
function sendmail(options) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(process.env);
        // create reusable transporter object using the default SMTP transport
        var transport = nodemailer_1.default.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            // service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const message = {
            from: 'shahidkhan0085200@gmail.com',
            to: "shahidkhan501112@gmail.com",
            subject: options.subject,
            text: options.text,
            html: options.html, // html body
        };
        //     // send mail with defined transport object
        let info = yield transport.sendMail(message);
    });
}
exports.sendmail = sendmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hlbHBlcnMvaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUU1QixnREFBd0I7QUFFeEIsNERBQW9DO0FBSXBDLE1BQWEsTUFBTTtDQUVsQjtBQUZELHdCQUVDO0FBTUQsU0FBZ0IsUUFBUSxDQUFDLElBQVE7SUFDN0IsTUFBTSxZQUFZLEdBQWlCLEVBQUUsQ0FBQTtJQUNyQyxLQUFLLE1BQU0sQ0FBQyxXQUFXLEVBQUcsYUFBYSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQztRQUM3RCxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsT0FBTyxZQUFZLENBQUM7QUFDeEIsQ0FBQztBQU5ELDRCQU1DO0FBR0QsdUJBQXVCO0FBQ3ZCLFNBQWdCLE9BQU87SUFDbkIsTUFBTSxXQUFXLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELE1BQU0sT0FBTyxHQUFHLGdCQUFNLENBQUMsV0FBVyxDQUFDO1FBQy9CLFdBQVcsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNsQyxFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1FBQ3ZCLENBQUM7UUFDRCxRQUFRLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDL0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUUsR0FBQyxNQUFNLENBQUE7WUFDL0UsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FB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