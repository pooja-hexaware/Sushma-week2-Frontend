import React from 'react'
import { styled } from '@mui/system'
import { SimpleCard } from 'components'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))
const Home = () => {
    const loading = useSelector((state) => state.loading)
    const navigate = useNavigate()
    return (
        <div
            style={{
                backgroundImage: `url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")`,
                justifyContent: 'flex-start',
            }}
        >
            <div style={{ backgroundColor: 'lightBlue' }}>
                <Container>
                    <SimpleCard title="Hi Foodie!">
                        {loading ? (
                            'Loading...'
                        ) : (
                            <div>
                                <strong>
                                    <h2>
                                        WIWI Food App
                                    </h2>
                                </strong>
                            </div>
                        )}
                    </SimpleCard>
                </Container>
            </div>
            <Card
                sx={{
                    maxWidth: 500,
                    marginLeft: 20,
                    backgroundColor: 'lightBlue',
                }}
            >
                <CardMedia
                    component="img"
                    height="100"
                    image="https://i.pinimg.com/736x/af/7b/82/af7b822183faa85e7b136a6521bf9b8d.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography
                        sx={{ fontSize: 30 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {' '}
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={() => navigate('/menuList')}
                        >
                            <strong>WiWi Store @1234</strong>
                        </Button>
                        <br />
                    </Typography>
                    <Typography
                        sx={{ fontSize: 15 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        <b>Address:</b>
                        Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO
                        65584-5678.
                    </Typography>
                </CardContent>
            </Card>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Home
