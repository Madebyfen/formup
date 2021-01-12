"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeField = exports.setValidation = exports.setValue = void 0;
const types_1 = require("./types");
const setValue = (payload) => ({
    payload,
    type: types_1.ActionType.SET_VALUE,
});
exports.setValue = setValue;
const setValidation = (payload) => {
    return {
        payload,
        type: types_1.ActionType.SET_VALIDATION,
    };
};
exports.setValidation = setValidation;
const removeField = (name) => ({
    payload: {
        name,
    },
    type: types_1.ActionType.REMOVE_FIELD,
});
exports.removeField = removeField;
//# sourceMappingURL=actions.js.map