const SELECT_DESIGNER = "SELECT_DESIGNER";
const CLEAR_DESIGNER = "CLEAR_DESIGNER";

export const select_designer = (designer) => ({
  type: SELECT_DESIGNER,
  designer: designer,
});

export const clear_designer = (designer) => ({
  type: CLEAR_DESIGNER,
  designer: designer,
});
