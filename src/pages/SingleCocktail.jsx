import axios from "axios";
import { useLoaderData } from "react-router";
import LoneCocktail from "../components/LoneCocktail";
import { useQuery } from "@tanstack/react-query";

const singleCocktailDBUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const searchSingleCocktail = (id) => {
    return {
        queryKey: ["searchSingleCocktail", id],
        queryFn: async () => {
            const response = await axios(`${singleCocktailDBUrl}${id}`);
            return response.data.drinks;
        },
    };
};

export const loader =
    (queryClient) =>
    async ({ params }) => {
        const id = params.id;
        await queryClient.ensureQueryData(searchSingleCocktail(id));
        return id;
    };

const SingleCocktail = () => {
    const id = useLoaderData();

    const response = useQuery(searchSingleCocktail(id));
    const { data: drinks } = response;

    const getIngedients = (() => {
        let strIngredients = "";
        for (const ingredients in drinks[0]) {
            if (
                ingredients.includes("strIngredient") &&
                drinks[0][ingredients] !== null
            ) {
                strIngredients += `${drinks[0][ingredients]}, `;
            }
        }
        return strIngredients.slice(0, -2);
    })();

    return (
        <section style={{ padding: "0.5rem" }}>
            <LoneCocktail data={drinks[0]} getIngedients={getIngedients} />
        </section>
    );
};
export default SingleCocktail;
