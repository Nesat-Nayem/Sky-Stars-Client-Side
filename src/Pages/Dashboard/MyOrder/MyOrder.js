
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    const { user } = useAuth();
    // const currentEmail = user?.email;
    // console.log(currentEmail)


    // get data from database
    useEffect(() => {
        fetch(`https://secure-falls-75626.herokuapp.com/MyOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [isDeleted, user])

    // console.log(myOrders)


    // delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if (proceed) {
            fetch(`https://secure-falls-75626.herokuapp.com/myOrders/order/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('delete success');
                        // const remaining = products.filter(product => product._id !== id);
                        // setProducts(remaining)
                        setIsDeleted(true);
                    }
                    else {
                        setIsDeleted(false)
                    }
                });
        }

    }
    return (
        <Container>
            <h3>My Order {myOrders.length}</h3>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell >Action</TableCell>
                            <TableCell >Payment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((order, index) => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell> {index} </TableCell>
                                <TableCell> {order.name
                                } </TableCell>
                                <TableCell> {order.phone
                                } </TableCell>
                                <TableCell> {order.serviceName} </TableCell>
                                <TableCell> {order.price} </TableCell>
                                <TableCell> {order.status} </TableCell>
                                <TableCell> {order.payment ? "Paid" :
                                    <Link to={`/dashboard/MyOrders/${order._id}`}>
                                        <Button>Pay</Button>
                                    </Link>}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => handleDelete(order?._id)}
                                        variant="outlined" color="error">Delete
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrder;