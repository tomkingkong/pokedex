import { PokeTainer, mapDispatchToProps, mapStateToProps } from '.';
import * as actions from '../../actions';
import React from 'react';


describe('PokeTainer', () => {
  describe('mapStateToProps', () => {
    it('should get some types', () => {
      const mockState = {
        types: []
      }
      const expected = {types:[]}
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should add some types', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.populateTypes([]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addPokeTypes([]);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});