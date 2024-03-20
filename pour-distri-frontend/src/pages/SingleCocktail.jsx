import axios from "axios";
import { useLoaderData } from "react-router";
import LoneCocktail from "../components/LoneCocktail";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import happyClientsSvg from "../assets/images/happy-clients.svg";

const Wrapper = styled.article`
    margin-top: 7.5rem;
    text-align: center;
    font-size: 1.3rem;

    button {
        background-color: #1f2937;
        color: #f9fafb;
        padding: 0.25rem;
    }

    img {
        display: block;
        margin: 0 auto;
        height: 15rem;
        width: 90%;
    }

    @media only screen and (width >= 768px) {
        margin-top: 9.5rem;

        img {
            height: 17rem;
        }
    }
`;

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
        <>
            <Wrapper>
                <Link to="/" className="back-home-link">
                    <button type="button">Back to Home</button>
                </Link>
                <img src={happyClientsSvg} alt="Happy Users Image" />
            </Wrapper>
            <LoneCocktail data={drinks[0]} getIngedients={getIngedients} />
        </>
    );
};
export default SingleCocktail;
