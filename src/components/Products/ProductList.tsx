import { Typography, Grid } from '@mui/material'
import ProductsLestItem from './ProductsLestItem'

type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    textTranform: 'uppercase',
                    textAling: 'center',
                }}
            >
                Lest of Product
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <ProductsLestItem
                        title="iPhone 14 Pro"
                        description="This is iPhone 14 Pro"
                        type="phone"
                        capacity="256"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductsLestItem
                        title="iPhone 13 Pro"
                        description="This is iPhone 13 Pro"
                        type="phone"
                        capacity="128"
                        price={800}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductsLestItem
                        title="iPhone 12 Pro"
                        description="This is iPhone 12 Pro"
                        type="phone"
                        capacity="64"
                        price={500}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
