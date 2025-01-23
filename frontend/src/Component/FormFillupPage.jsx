import { useState } from 'react';
import { Container, Button, Form, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        let newMessage;
        try {
            newMessage = {
                fullName,
                email,
                address,
                message,
            };
            setLoading(false);
            toast.success('Success, message sent!', { autoClose: 1000 }); // Display success message for 1 seconds
        } catch (err) {
            setLoading(false);
            toast.error('Message not sent', { autoClose: 1000 }); // Display error message for 1 seconds
        }
        axios.post('/contact', newMessage);
    };

    return (
        <Container className='container h-screen'>
            <title>Contact Us</title>
            <br />
            <div className='box'>
                <h1>Contact Us</h1>
            </div>
            <Form onSubmit={submitHandler}>
                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label> Full Name</Form.Label>
                    <Form.Control
                        placeholder='full name'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        placeholder='address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='message'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        placeholder='your message'
                        value={message}
                        as='textarea'
                        rows={4}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </Form.Group>

                <div>
                    <Button variant='primary' disabled={loading} type='submit'>
                        {loading ? 'Sending...' : 'Submit'}
                    </Button>
                </div>

                <hr />
            </Form>
        </Container>
    );
}
