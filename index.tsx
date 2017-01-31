import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Index from './src/components/index'
import store from './src/store';
import './src/listeners';

interface Person {
  name: string,
  age: number
}

function hej(people: Person[]) {
  return people.map((person) => {
    return person.name;
  });
}

const p: Person = { name: 'awd', age: 123 };

console.log(p);

ReactDOM.render(
  <Provider store={store}>
    <Index>
    </Index>
  </Provider>,
  document.getElementById('root')
)
