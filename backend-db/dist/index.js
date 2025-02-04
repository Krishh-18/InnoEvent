"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//backend routes here
app.use(express_1.default.json());
app.post('/signup', (req, res) => {
    //signup route
});
app.post('/signin', (req, res) => {
    //signin route
});
app.listen(3000, () => {
    console.log('Server is running on port 5000');
});
