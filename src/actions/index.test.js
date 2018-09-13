import * as actions from '../actions';

describe('actions', () => {
  it('should populate types', () =>{
    const mockTypes = [{type:1}];
    const expected = {types:[{type:1}], type:'POPULATE_TYPES'}
    const results = actions.populateTypes(mockTypes);
    expect(results).toEqual(expected);
  });
});