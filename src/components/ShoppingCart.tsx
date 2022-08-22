import { Offcanvas, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
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
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}