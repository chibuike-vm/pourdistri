import axios from "axios";
import { useLoaderData } from "react-router";
import LoneCocktail from "../components/LoneCocktail";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.article`
    margin-top: 7.5rem;
    text-align: center;
    font-size: 1.3rem;

    button {
        background-color: #1f2937;
        color: #f9fafb;
        padding: 0.25rem;
    }

    @media only screen and (width >= 768px) {
        margin-top: 9.5rem;
    }
`;

const singleCocktailDBUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
    const response = await axios(`${singleCocktailDBUrl}${params.id}`);
    return response;
};

const SingleCocktail = () => {
    const response = useLoaderData();
    const { drinks } = response.data;

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
            </Wrapper>
            <LoneCocktail data={drinks[0]} getIngedients={getIngedients} />
        </>
    );
};
export default SingleCocktail;
