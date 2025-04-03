import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoyaltyProgram = ({ customer }) => {
    const handleRedeemPoints = () => {
        // Logic to redeem points
    };

    return (
        <div>
            <h4>Loyalty Program</h4>
            <p>Points: {customer.points}</p>
            <Form>
                <Button variant="success" onClick={handleRedeemPoints}>Redeem Points</Button>
            </Form>
        </div>
    );
};

export default LoyaltyProgram;
