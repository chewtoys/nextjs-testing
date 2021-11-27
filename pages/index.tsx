import React from "react";

import { Header, Main, Footer, Cards } from "@components";

import data from "@public/meta.json";

const Home: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Main />
            <Cards plugins={data.plugins}/>
            <Footer />
        </div>
    );
};

export default Home;
