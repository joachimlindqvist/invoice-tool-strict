import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Index from './src/components/index'
import store from './src/store';
import './src/listeners';

ReactDOM.render(
  <Provider store={store}>
    <Index>
    </Index>
  </Provider>,
  document.getElementById('root')
)
