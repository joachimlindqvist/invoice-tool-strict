export const listen = (store, select, onChange) => {
  let currentState;

  function onListenedValueChange() {
    let nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(onListenedValueChange);
  onListenedValueChange();
  return unsubscribe;
}

export const startListening = (store, listeners) => {
    for (let category in listeners)
        for (let listener in listeners[category]) {
        listeners[category][listener](store);
    }
}