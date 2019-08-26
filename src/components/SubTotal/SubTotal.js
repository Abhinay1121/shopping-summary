import React,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class SubTotal extends Component {
    render() {
        return(
            <Row className="show-grid">
             <Col md={6}>Subtotal</Col>
             <Col md={6}>
             <strong>{`$${this.props.price}`}</strong>
             </Col>
            </Row>
        )
    }
}

export default SubTotal;