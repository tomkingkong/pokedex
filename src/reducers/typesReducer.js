export const typesReducer = (state=[], action) => {
  switch (action.type) {
  case 'POPULATE_TYPES':
    return action.types;
  default:
    return state;
  }
};
