export const ADD_DESIGNERS = 'ADD_DESIGNERS';
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_DESIGNERS = 'LOAD_DESIGNERS';
export const LOAD_APPOINTMENTS = 'LOAD_APPOINTMENTS';
export const LOAD_REVIEW = 'LOAD_REVIEW';

export function load_database({db}) {
    return { type : LOAD_DESIGNERS, db};
}