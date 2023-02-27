import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'
import Content from './Content'

const App = () => {
    return (
        <>
            <Title title="React" nums={2022} />
            <Title title="Add" nums={2023} />
            <Content text1="Hello world text1" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
