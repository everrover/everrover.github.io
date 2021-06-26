import React, { createContext, useContext, useReducer } from 'react'

const initState = {banner: '/banner.png', pageType: 'home', pageTitle: '', pageSubtitle: '', articlePublishedDate: Date.now()}
const store = createContext(initState)

export function ContextProvider(props) {
  const { Provider, Consumer } = store;
  const value = useContext(store) // to fetch the context data 

  const [state, dispatch] = useReducer((state, action) => {
    const { type } = action;
    switch(action) {
      case 'action description':
        // const newState = {...state, sth: "sth"}
        // return newState;

      default:
        console.log("Context global action illegal!!")
    }
  }, initState);

  // console.log(value)
  return (
    <Provider value={{state, dispatch}}>
      {props.children}
    </Provider>
  )
}

export function useAppContext() {
  return useContext(store);
}
