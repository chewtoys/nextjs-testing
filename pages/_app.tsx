import React from "react";
import Head from "next/head"
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <RecoilRoot>
                    <Head>
                        <title>Cool App </title>
                    </Head>
                    <Component {...pageProps} />
                </RecoilRoot>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
