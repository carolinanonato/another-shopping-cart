import { Offcanvas, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import StoreItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps){
    const{closeCart, cartItems} = useShoppingCart()

    return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <OffcanvasHeader closeButton>
            <OffcanvasTitle>Cart</OffcanvasTitle>
        </OffcanvasHeader>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItem)=> {
                            const item = StoreItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0)* cartItem.quantity
                        }, 0))}
                    </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}