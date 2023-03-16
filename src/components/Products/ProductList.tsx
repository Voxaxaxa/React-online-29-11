import { Typography, Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
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
                {productsArray.map(
                    ({ title, description, type, capacity, price }) => (
                        <Grid item xs={12} sm={4}>
                            <ProductsLestItem
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
