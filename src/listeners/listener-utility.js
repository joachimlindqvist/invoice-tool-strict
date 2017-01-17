export const listen = (store, select, onChange) => {
  let currentState;

  function handleChange() {
    let nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

export const startListening = (store, listeners) => {
    for (let category in listeners)
        for (let listener in listeners[category]) {
        listeners[category][listener](store);
    }
}