import { Button, Card, CardContent, CardActions } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}
const ProductsLestItem = ({
    title,
    description,
    type,
    capacity,
    price,
}: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacety:{capacity}Gb</div>
                <div className="product-price">
                    Price: <strong> ${price} </strong>
                </div>
                <CardActions className="btns-wrap">
                    <Button variant="outlined"> Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductsLestItem
