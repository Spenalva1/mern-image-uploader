"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config/config"));
const images_routes_1 = __importDefault(require("./images/images.routes"));
// Initialization
const app = (0, express_1.default)();
// Settings
dotenv_1.default.config();
app.set('port', config_1.default.port || 8080);
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
// Middlewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
}));
// Routes
app.use('/images', images_routes_1.default);
exports.default = app;
