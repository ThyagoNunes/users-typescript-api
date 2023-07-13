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
exports.CreateUserController = void 0;
const validator_1 = __importDefault(require("validator"));
const helpers_1 = require("../helpers");
class CreateUserController {
    constructor(createUserRepository) {
        this.createUserRepository = createUserRepository;
    }
    handle(httpRequest) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // verificar campos obrigatórios
                const requiredFields = ["firstName", "lastName", "email", "password"];
                for (const field of requiredFields) {
                    if (!((_b = (_a = httpRequest === null || httpRequest === void 0 ? void 0 : httpRequest.body) === null || _a === void 0 ? void 0 : _a[field]) === null || _b === void 0 ? void 0 : _b.length)) {
                        return (0, helpers_1.badRequest)(`Field ${field} is required`);
                    }
                }
                // verificar se o firstName & lastName são validos
                const sizeFirstName = httpRequest.body.firstName.length;
                const sizeLastName = httpRequest.body.lastName.length;
                console.log(sizeFirstName);
                console.log(sizeLastName);
                if (sizeFirstName && sizeLastName < 2) {
                    return (0, helpers_1.badRequest)("Min char 2");
                }
                //
                // verificar se o e-mail é válido
                const emailIsValid = validator_1.default.isEmail(httpRequest.body.email);
                if (!emailIsValid) {
                    return (0, helpers_1.badRequest)("E-mail is invalid");
                }
                // verificar se a senha é segura
                const passwordIsSafe = validator_1.default.isStrongPassword(httpRequest.body.password, {
                    minLength: 8,
                    minNumbers: 1,
                    minSymbols: 1,
                    minUppercase: 1,
                });
                if (!passwordIsSafe) {
                    return (0, helpers_1.badRequest)("Password min length: 8, min number: 1, min simbols: 1, min upperCase: 1");
                }
                const user = yield this.createUserRepository.createUser(httpRequest.body);
                return (0, helpers_1.created)(user);
            }
            catch (error) {
                return (0, helpers_1.serverError)();
            }
        });
    }
}
exports.CreateUserController = CreateUserController;
