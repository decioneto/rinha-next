import { parse } from "date-fns";

export function validateDate(dateString: string) {
    return !isNaN(Number(parse(dateString, 'yyyy-MM-dd', new Date())))
}