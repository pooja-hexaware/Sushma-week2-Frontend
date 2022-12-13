import { Button, Divider, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from 'views/cart/store/cartSlice'
import ToppingsDialog from './ToppingsDialog'

export default function Item({ menu }) {
    const [count, setCount] = useState(0)
    const [activeToppings, setActiveToppings] = useState([])
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const handleClickOpen = (toppings) => {
        setOpen(true)
        setActiveToppings(toppings)
    }
    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(
            addToCart({
                [menu._id]: {
                    ...menu,
                    quantity: count,
                },
            })
        )
    }, [count])

    return (
        <div>
            <Typography align="left" component="div" id="item">
               <strong> {menu.itemname} </strong>
                <object align="right">
                    <b> {'Quantity'}</b>
                </object>
            </Typography>
            <object align="right">
                <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                        setCount((c) => c - 1)
                    }}
                >
                    -
                </Button>
                {'  '} {count} {'  '}
                <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                        setCount((c) => c + 1)
                    }}
                >
                    +
                </Button>
            </object>
            <Typography align="left" component="div">
               <i> {menu.itemdescription} </i>
            </Typography>
            <Typography align="left" component="div" color="black">
                <b>Amount: </b>${menu.amount}
                {'  '}
                <Button
                    className="ml-10"
                    variant="outlined"
                    onClick={() => handleClickOpen(menu.toppings)}
                >
                    +Add Toppings
                </Button>
            </Typography>
            <br />
            <Divider />
            <br />
            <ToppingsDialog
                open={open}
                handleClose={handleClose}
                toppings={activeToppings}
            />
        </div>
    )
}
