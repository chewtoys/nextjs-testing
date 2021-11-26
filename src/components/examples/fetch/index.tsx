import React, { useEffect, useState } from "react";

/**
 * This component is generated as an example for fetch
 */

interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

const API_URL =
    "https://official-joke-api.appspot.com/jokes/programming/random";

const __DEV__ = process.env.NODE_ENV === "development";
export const FetchExample = () => {
    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState<Joke[]>([]);

    __DEV__ && console.log("data: ", data); 
    
    useEffect( () =>  {
        fetch(API_URL)
            .then((res) => {
                return res.json();
            })
            .then(
                (result) => {
                    setData(result);
                    setIsLoaded(true);
                },

                (error: Error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <header>
                    <h2>Fetch Data Fetching Example</h2>
                </header>
                <main data-testid="joke-container">
                    <p>Programmer Jokes {`#${data[0].id}`}</p>
                    <p>{data[0].setup}</p>
                    <p>{data[0].punchline}</p>
                </main>
                <footer>
                    <a
                        href="https://swr.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go To Documentation
                    </a>
                </footer>
            </div>
        );
    }
};
