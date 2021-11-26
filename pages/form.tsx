import { Header, Footer } from "@components";
import RegisterForm from "@components/RegiterForm";
import { NextPage } from "next";
import { Container } from "react-bootstrap";

const RegisterPage: NextPage = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Container className="py-5">
                <RegisterForm />
            </Container>
            <Footer />
        </div>
    );
};

export default RegisterPage;
