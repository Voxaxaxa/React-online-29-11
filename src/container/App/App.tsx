import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [CartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={CartData} />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
