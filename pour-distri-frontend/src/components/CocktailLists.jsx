/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    gap: 2rem;
    padding: 2rem;

    article {
        box-shadow: 0 0.1rem 1rem #d1d5db;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .cocktail-description {
        padding-left: 2rem;
        background-color: #1f2937;
        color: #f9fafb;
    }

    .cocktail-description h2 {
        font-size: 1.3rem;
    }

    .cocktail-image-div img {
        width: 100%;
    }

    article div button {
        margin-bottom: 2rem;
        font-size: 1.2rem;
        background-color: #be123c;
        color: #fff1f2;
        padding: 0.3rem 0.5rem;
    }

    @media only screen and (width >= 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        article {
            width: 45%;
        }

        .last-cocktail-container {
            margin-right: auto;
            margin-left: 0.35rem;
        }
    }

    @media only screen and (width >= 850px) {
        article {
            width: 30%;
        }
    }
`;

const ErrorWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;

    span {
        font-size: 1.2rem;
        text-transform: capitalize;
        color: #93c5fd;
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
                    Sorry, the search query did not match any cocktail in store.
                    You will be taken back to the <span> home page</span> in 7
                    seconds.
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
                                height={300}
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
