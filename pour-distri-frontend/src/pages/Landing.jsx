import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import CocktailLists from "../components/CocktailLists";

const cocktailDBSearchUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
    const url = new URL(request.url);
    let searchItem = url.searchParams.get("search");
    const response = await axios.get(
        `${cocktailDBSearchUrl}${searchItem || ""}`
    );
    return { response, searchItem };
};

const Landing = () => {
    const { response, searchItem } = useLoaderData();
    const { drinks } = response.data;

    return (
        <section>
            <SearchForm searchItem={searchItem} />
            <CocktailLists drinks={drinks} />
        </section>
    );
};

export default Landing;
