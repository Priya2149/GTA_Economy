import React, { useState, useEffect } from 'react';
import { Button, Card, Typography } from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        // Fetch content that is awaiting approval
        axios.get('http://localhost:5000/api/content')
            .then(response => setContent(response.data))
            .catch(error => console.error('Error fetching content:', error));
    }, []);

    const handleApprove = async (contentId) => {
        try {
            await axios.put(`http://localhost:5000/api/content/approve/${contentId}`);
            setContent(content.filter(item => item._id !== contentId));  // Remove approved content
        } catch (error) {
            console.error('Error approving content:', error);
        }
    };

    return (
        <div>
            {content.map((item) => (
                <Card key={item._id} className="p-5 shadow-lg my-5">
                    <Typography variant="h6">{item.assetData}</Typography>
                    <Button onClick={() => handleApprove(item._id)} variant="contained" color="primary">
                        Approve
                    </Button>
                </Card>
            ))}
        </div>
    );
};

export default AdminDashboard;
