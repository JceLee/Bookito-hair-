const LOAD_DESIGNERS = "LOAD_DESIGNERS";
const UPDATE_DESIGNERS = "UPDATE_DESIGNERS";

export const load_database = (database) => ({
  type: LOAD_DESIGNERS,
  database: database,
});

export const update_database = (database) => ({
  type: UPDATE_DESIGNERS,
  database: database,
});

