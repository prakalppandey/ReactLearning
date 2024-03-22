import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
    'a',
    {href: 'https://www.geeksforgeeks.org/javascript-interview-questions-and-answers/',
    target: '_black'},
    'click kro muje'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
  
)
