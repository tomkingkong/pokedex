import { typesReducer } from './typesReducer';

describe('typesReducer', () => {
  it('should return default state', () => {
    const expected = [];
    const results = typesReducer(undefined, []);
    expect(results).toEqual(expected);
  });

  it('should have all types', () => {
    const initialState = [];
    const mockAction = {
      type: 'POPULATE_TYPES',
      types: [{type:1}]
    }
    const expected = [{type:1}];
    const results = typesReducer(initialState, mockAction);
    expect(results).toEqual(expected);
  });
});