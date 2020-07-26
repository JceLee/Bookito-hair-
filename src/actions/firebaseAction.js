export const createDatabase = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'CREATE_DATABASE'}, project)
    }
};