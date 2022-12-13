import { Button, Card, Divider } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cart)
    const navigate = useNavigate()

    return (
        <>
            <div>
                <center>
                    <Card
                        sx={{
                            maxWidth: 500,
                            backgroundColor: 'lightBlue',
                            marginTop: 10,
                        }}
                    >
                        {Object.values(cartItems).map((item) => (
                            <>
                                <div>
                                    <p>
                                        <strong>Item Name:</strong>{' '}
                                        {
                                            item.itemname
                                        }
                                    </p>
                                    <p>
                                        <strong>Quantity:</strong>{' '}
                                        {
                                            item.quantity
                                        }
                                    </p>
                                    <p>
                                        <strong>Amount:</strong>{' '}
                                        {item.amount * item.quantity}
                                    </p>
                                     <h4>Total Amount: {item.amount * item.quantity} </h4>
                                </div>
                                <Divider />
                            </>
                        ))}
                        <form className="form" name="form" id="form">
                            <div className="form-content">
                                <div className="form-group mt-3">
                                    <label>Your Name</label>
                                    <br />
                                    <input
                                        type="text"
                                        className="form-control mt-1"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Street</label>
                                    <br />
                                    <input
                                        type="text"
                                        id="desc"
                                        name="desc"
                                        className="form-control mt-1"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Postal Code</label>
                                    <br />
                                    <input
                                        type="text"
                                        id="desc"
                                        name="desc"
                                        className="form-control mt-1"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>City</label>
                                    <br />
                                    <input
                                        type="text"
                                        id="desc"
                                        name="desc"
                                        className="form-control mt-1"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Phone Number</label>
                                    <br />
                                    <input
                                        type="number"
                                        id="desc"
                                        name="desc"
                                        className="form-control mt-1"
                                    />
                                </div>
                            </div>
                        </form>
                        <br />
                        <Button variant="contained">Checkout</Button>
                        {'   '}
                        <Button
                            color="error"
                            variant="contained"
                            onClick={() => navigate('/menuList')}
                        >
                            Go Back
                        </Button>
                    </Card>
                    <br />
                    <br />
                </center>
            </div>
        </>
    )
}

export default Cart
