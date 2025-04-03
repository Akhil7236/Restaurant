import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const FeedbackManagement = ({ feedbackList }) => {
    return (
        <div>
            <h4>Customer Feedback</h4>
            <ListGroup>
                {feedbackList.map((feedback, index) => (
                    <ListGroup.Item key={index}>
                        {feedback.comment}
                        <Button variant="link">Respond</Button>
                        <Button variant="link" className="text-danger">Delete</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default FeedbackManagement;
