import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

interface CardsProps {
    plugins: {
        name: string;
        description: string;
        url: string;
    }[];
}

export const Cards: React.FC<CardsProps> = ({ plugins }) => {
    return (
        <Container className="my-5 flex-grow-1">
            <Row>
                {plugins.map((plugin) => (
                    <Col
                        md={4}
                        key={plugin.name}
                        className="mb-3"
                        data-testid="container"
                    >
                        <Card className="border-none">
                            <Card.Body>
                                <Card.Title>{plugin.name}</Card.Title>
                                <Card.Text>{plugin.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
