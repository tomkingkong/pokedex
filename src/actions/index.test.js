import * as actions from '../actions';

describe('actions', () => {
  it('should return an object with type of POPULATE_TYPES and an array of types', () =>{
    const mockTypes = [{type:1}];
    const expected = {types:[{type:1}], type:'POPULATE_TYPES'}
    const results = actions.populateTypes(mockTypes);
    expect(results).toEqual(expected);
  });
});