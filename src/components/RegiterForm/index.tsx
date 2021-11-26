import Head from "next/head";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AvatarDropzone from "./AvatarDropzone";


// import "./dropzone.module.css"

const RegisterForm = () => {
    return (
        <div>
            <Head>
                <title>Cool App | Register</title>
            </Head>
            <Form>
                <Row>
                    <Col>
                        <AvatarDropzone />
                    </Col>
                </Row>
                <Row className="my-3" >
                    <Col>
                        <Form.Label>First name</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Row className="mb-3">
                    <Col>
                        <Form.Control placeholder="City" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="State" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Zip" />
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RegisterForm;
