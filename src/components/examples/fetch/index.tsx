import React, { useEffect, useState } from "react";

/**
 * This component is generated as an example for fetch
 */

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
export interface Geo {
    lat: string;
    lng: string;
}
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

const __DEV__ = process.env.NODE_ENV === "development";

export const FetchExample = () => {
    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [data, setData] = useState<User | null>(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(false);
                    setData(result);
                },

                (error) => {
                    setIsLoaded(false);
                    setError(error);
                },
            );
    }, []);

    if (error) {
        return (
            <div>
                <header>
                    <h2>{error.name}</h2>
                </header>
                <main data-testid="error-container">
                    Error: <p>{error.message}</p>
                </main>
            </div>
        );
    }

    if (isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <header>
                <h2>Profile Info</h2>
            </header>

            {data && (
                <main data-testid="users-container">
                    <p>Reg No. : {`#${data.id}`}</p>
                    <p>
                        Name:{" "}
                        <span data-testid="user-username">{data.username}</span>{" "}
                    </p>
                    <p>
                        Email:{" "}
                        <span data-testid="user-email">{data.email}</span>{" "}
                    </p>
                </main>
            )}
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
};
