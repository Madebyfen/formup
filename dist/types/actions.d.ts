import { RemoveInputAction, SetValidationAction, SetValueAction, ValidationState } from './types';
export declare const setValue: (payload: {
    name: string;
    value: any;
    fromInitial?: boolean;
    validating: boolean;
}) => SetValueAction;
export declare const setValidation: (payload: {
    fieldName: string;
    validation: ValidationState;
    fromInitial?: boolean;
    validationMessage?: any;
}) => SetValidationAction;
export declare const removeField: (name: string) => RemoveInputAction;
