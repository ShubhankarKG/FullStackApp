import { FIeldError } from "../generated/graphql";


export const toErrorMap = (errors: FIeldError[]) => {
    const errorMap: Record<string, string> = {};
    errors.forEach(({field, message}) => {
        errorMap[field] = message;
    })

    return errorMap;
}