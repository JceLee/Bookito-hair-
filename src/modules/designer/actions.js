export const types = {
  LOAD_REQUEST: "designers/LOAD_REQUEST",
  LOAD_SUCCESS: "designers/LOAD_SUCCESS",
  LOAD_FAILURE: "designers/LOAD_FAILURE",
  UPDATE_DATA: "designers/UPDATE_DATA",
};

export const actions = {
  load_request: (designerType) => ({
    type: types.LOAD_REQUEST,
    payload: designerType,
  }),
  load_success: (designerList) => ({
    type: types.LOAD_SUCCESS,
    payload: designerList,
  }),
  load_failure: (err) => ({
    type: types.LOAD_FAILURE,
    payload: err,
  }),
  update_data: (designerList) => ({
    type: types.UPDATE_DATA,
    payload: designerList,
  }),
};
