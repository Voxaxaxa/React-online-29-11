import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur aperiam placeat vitae dignissimos maiores eaque
                asperiores natus neque amet ad. Consectetur blanditiis nihil
                adipisci totam? At minus error itaque tempore?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                eius harum minima et repellat esse ratione alias neque cum
                nesciunt ab debitis, molestias beatae rem, molestiae sapiente
                doloremque voluptates accusantium.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title title="React" nums={2022} />
            <Title title="Add" nums={2023} />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
