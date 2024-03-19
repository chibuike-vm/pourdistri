import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import CocktailLists from "../components/CocktailLists";
import { useQuery } from "@tanstack/react-query";

const cocktailDBSearchUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailDB = (searchItem) => {
    return {
        queryKey: ["cocktail", searchItem || "defaultCocktailList"],
        queryFn: async () => {
            const response = await axios.get(
                `${cocktailDBSearchUrl}${searchItem || ""}`
            );
            return response.data.drinks;
        },
    };
};

export const loader =
    (queryClient) =>
    async ({ request }) => {
        const url = new URL(request.url);
        let searchItem = url.searchParams.get("search");
        await queryClient.ensureQueryData(searchCocktailDB(searchItem));
        return searchItem;
    };

const Landing = () => {
    const searchItem = useLoaderData();

    const response = useQuery(searchCocktailDB(searchItem));
    const { data: drinks } = response;

    return (
        <section>
            <SearchForm searchItem={searchItem} />
            <CocktailLists drinks={drinks} />
        </section>
    );
};

export default Landing;
