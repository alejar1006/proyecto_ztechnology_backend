"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quote_1 = require("../controllers/quote");
const quotes_1 = require("../validators/quotes");
const validate_jwt_1 = __importDefault(require("../helpers/validate-jwt"));
const router = (0, express_1.Router)();
router.post('/saveQuote', validate_jwt_1.default, quotes_1.validateSaveQuote, quote_1.saveQuote);
router.get('/consultQuote', validate_jwt_1.default, quote_1.consultQuote);
router.get('/consultQuote/:id', validate_jwt_1.default, quote_1.consultQuoteById);
router.put('/updateQuote', validate_jwt_1.default, quotes_1.validateUpdateQuote, quote_1.updateQuote);
router.delete('/deleteQuote/:id', validate_jwt_1.default, quote_1.deleteQuote);
exports.default = router; //exportar ruta
