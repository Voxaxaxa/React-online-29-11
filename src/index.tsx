import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement(
//   'h1', 
//     {
//       id: 'title',
//       className: 'red',
//     },
//  'Hello React')

const title = <h1 className='red'>Test</h1>

const list = (
  <ul>
    <li>List item1</li>
    <li>List item2</li>
    <li>List item3</li>
  </ul>
)

const content = (
  <div>
    {title}
    {list}
  </div>
)


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
