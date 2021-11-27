import { Header, Footer } from "@components";
import { FetchExample } from "@components/examples/fetch/index";
import { NextPage } from "next";
import { Container } from "react-bootstrap";

const FetchExamplePage: NextPage = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Container className="py-5">
                <FetchExample />
            </Container>
            <Footer />
        </div>
    );
};

export default FetchExamplePage;
