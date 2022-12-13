import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from './store/menu.action'
import Item from './Item'
import { SimpleCard } from 'components'
import { Container } from '@mui/system'

const MenuList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector((state) => state.menu.menu)
    const loading = useSelector((state) => state.loading)
    const totalCount = useSelector((state) => state.cart.totalCount)

    const loadData = () => {
        dispatch(fetchMenu())
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div
            style={{
                backgroundImage: `url("https://img.freepik.com/free-vector/positive-lettering-with-food_52683-34388.jpg?w=2000")`,
            }}
        >
            <div>
                <br />
                <Container>
                    <SimpleCard title="Hi Foodie!">
                        {loading ? (
                            'Loading...'
                        ) : (
                            <div>
                                <strong>
                                    <h2>
                                        <i> WIWI Food App </i>
                                        <object align="right">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                onClick={() =>
                                                    navigate('/cart')
                                                }
                                            >
                                                Cart {'  '} <ShoppingCartIcon />
                                                {totalCount}
                                            </Button>
                                        </object>
                                    </h2>
                                </strong>
                            </div>
                        )}
                    </SimpleCard>
                </Container>
            </div>
            <div class="contents-wrapper">
                <center>
                    <br />
                    <Card
                        className="body"
                        sx={{ maxWidth: 500, backgroundColor: 'lightYellow' }}
                    >
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 30 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                {' '}
                                <strong>Good Food Great Time</strong>
                            </Typography>
                            <Typography
                                sx={{ fontSize: 15 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                <i>
                                    Our chefs at WiWi make delicious food
                                    selections every week- You pick, we cook and
                                    deliver
                                </i>
                            </Typography>
                        </CardContent>
                    </Card>
                    <br />
                    <Card
                        sx={{ maxWidth: 900, backgroundColor: 'lightYellow' }}
                    >
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 20 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                {data.map((menu) => {
                                    return <Item menu={menu} />
                                })}
                            </Typography>
                        </CardContent>
                    </Card>
                    <br />
                </center>
            </div>
        </div>
    )
}

export default MenuList
