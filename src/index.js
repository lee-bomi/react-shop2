import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

let 초기값 = [
    {id : 0, name : '신발', quan : 1},
    {id : 1, name : '신발2', quan : 2},
    {id : 2, name : '신발3', quan : 3}
]

let alert초기값 = true;

//state가아닌 변수에 정의된 값을 수정하는방법은 따로있음
//return되는 기본값은 state
function reducer(state = 초기값, 액션) {
    if(액션.type === '수량증가'){
        let copy  = [...초기값]
        copy[0].quan++;
        return copy;
    } else if(액션.type === '수량감소'){
        let copy = [...초기값];
        copy[0].quan--;
        return copy;
    } else {
        return state
    }
}

function reducer2(state = alert초기값, 액션) {
    if (액션.type === '닫기'){
        state = false;
        return state;
    } else {
        return state
    }
}

//let store = createStore(reducer);
let store = createStore(combineReducers({reducer, reducer2}))   //reducer여러개 합치는 문법

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
