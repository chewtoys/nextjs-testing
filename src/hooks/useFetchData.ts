import { useQuery } from "react-query";

const BASE_URL = "https://api.github.com/users";

export default function useFetchData() {
    return useQuery("fetchData", () =>
        fetch(`${BASE_URL}/api/data`).then((res) => res.json()),
    );
}
