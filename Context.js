import React, { createContext, useContext, useReducer } from 'react'

const initState = {banner: '/images/banner.png', pageType: 'home', pageTitle: '', pageSubtitle: '', publishedAt: Date.now(), tags: [], category: null}
const store = createContext(initState)

export function ContextProvider(props) {
  const { Provider, Consumer } = store;
  const value = useContext(store) // to fetch the context data 

  const [state, dispatch] = useReducer((state, action) => {
    console.log(action)
    const { type } = action;
    let newState = {...state}
    switch(type) {
      case 'about-page-visit':
      case 'home-page-visit':
      case 'archive-page-visit':
      case 'article-page-visit':
        newState = {...state, ...action}
        return newState;
      default:
        console.log("Context global action illegal!!")
        return newState
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
