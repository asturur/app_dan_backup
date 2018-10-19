const actionTypes = {
  SET_STEP: 'SET_STEP',
};

const basicActionCreator = type => payload => ({
  type,
  payload,
});

const actions = {
  setStep: basicActionCreator(actionTypes.SET_STEP),
};

const initialState = {
  step: 1,
};

const reducer = (state = initialState, { type, payload }) => {
  const setInState = key => {
    return {
      ...state,
      [key]: payload,
    };
  };

  switch (type) {
    case actionTypes.SET_STEP:
      return setInState('step');
    default:
      return state;
  }
}

export {
  reducer,
  actions,
}
