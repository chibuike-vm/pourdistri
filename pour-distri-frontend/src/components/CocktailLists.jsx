/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    margin: 0 auto;
    gap: 0.5rem;
    padding: 1rem 0.5rem;
    grid-row-gap: 1rem;
    grid-column-gap: 0.7rem;

    article {
        grid-column-start: span 6;
        background-color: #1f2937;
        box-shadow: 0 0 5px;
        color: white;
        border-radius: 5px;
    }

    img {
        width: 100%;
        height: 50%;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .cocktail-description {
        padding: 0.5rem;
        padding-bottom: 1rem;
    }

    h2 {
        font-size: 1.1rem;
        text-align: center;
        margin-top: 0;
    }

    h3 {
        font-size: 1rem;
    }

    button {
        background-color: #9f1239;
        border-radius: 0.4rem;
        color: white;
        padding: 0.25rem 0.5rem;
    }

    @media only screen and (width >= 768px) {
        article {
            grid-column-start: span 4;
        }
    }

    @media only screen and (width >= 850px) {
        article {
            grid-column-start: span 3;
        }
    }
`;

const ErrorWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0.5rem;

    h3 {
        font-size: 1rem;
    }

    span {
        font-size: 1rem;
        text-transform: capitalize;
        color: #9f1239;
    }
`;

const CocktailLists = ({ drinks }) => {
    const [time, setTime] = useState(0);
    const navigate = useNavigate();

    if (!drinks) {
        setTimeout(() => {
            setTime(7);
        }, 7000);
    }

    if (!drinks) {
        return (
            <ErrorWrapper>
                <h3>
                    Sorry, your search query did not match any cocktail in
                    store.
                </h3>
                {time === 7 ? <Navigate to="/" /> || navigate(-1) : ""}
            </ErrorWrapper>
        );
    }

    return (
        <Wrapper>
            {drinks.map((eachDrink, index) => {
                const {
                    idDrink,
                    strAlcoholic,
                    strGlass,
                    strDrink,
                    strDrinkThumb,
                } = eachDrink;

                return (
                    <article
                        key={idDrink}
                        className={
                            drinks.length - 1 === index
                                ? "last-cocktail-container"
                                : ""
                        }
                    >
                        <div className="cocktail-image-div">
                            <img
                                src={strDrinkThumb}
                                alt={strDrink}
                                height={400}
                                width={400}
                            />
                        </div>
                        <div className="cocktail-description">
                            <h2>{strDrink}</h2>
                            <h3>{strAlcoholic}</h3>
                            <h3>{strGlass}</h3>
                            <Link to={`/cocktail/${idDrink}`}>
                                <button type="button">Details</button>
                            </Link>
                        </div>
                    </article>
                );
            })}
        </Wrapper>
    );
};
export default CocktailLists;
