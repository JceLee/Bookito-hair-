const UPDATE_CONFORMED = "UPDATE_CONFORMED";
const UPDATE_PENDING = "UPDATE_PENDING";
const UPDATE_DECLINED = "UPDATE_DECLINED";
const UPDATE_DONE = "UPDATE_DONE";

export const update_conformed = (updateData) => ({
  type: UPDATE_CONFORMED,
  updateData: updateData,
});

export const update_pending = (updateData) => ({
  type: UPDATE_PENDING,
  updateData: updateData,
});

export const update_declined = (updateData) => ({
  type: UPDATE_DECLINED,
  updateData: updateData,
});

export const update_done = (updateData) => ({
  type: UPDATE_DONE,
  updateData: updateData,
});

