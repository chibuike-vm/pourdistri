/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
    box-shadow: 0 0.1rem 0.3rem;
    border-radius: 0.4rem;
    width: 100%;
    margin: 4.5rem auto;
    padding: 0.5rem;
    background-color: rgb(243, 244, 246);
    color: #030712;

    article:nth-child(1) {
        text-align: center;
        letter-spacing: 0.1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    div article:nth-child(2) {
        background-color: #1f2937;
        padding: 1rem;
    }

    article {
        width: 100%;
        margin: 0 auto;
        box-shadow: 0 0 0.8rem #f3f4f6;
    }

    article:nth-child(1) {
        box-shadow: none;
    }

    article img {
        width: 100%;
        height: auto;
    }

    h1 {
        margin: 2rem 0;
        font-size: 1.25rem;
    }

    h2 {
        color: #fb7185;
        font-size: 1rem;
    }

    button {
        padding: 0.4rem 0.5rem;
        background-color: #9f1239;
        color: white;
        border-radius: 0.4rem;
    }

    span {
        color: #fff1f2;
        font-size: 1rem;
    }

    @media only screen and (width > 767px) {
        div {
            width: 100%;
            margin: 0 auto;
        }

        article img {
            width: 100%;
            height: 100%;
        }

        div article:nth-child(2) {
            width: 100%;
        }
    }

    @media only screen and (width > 849px) {
        div {
            display: flex;
            gap: 1rem;
        }
    }
`;

const LoneCocktail = ({ data, getIngedients }) => {
    const {
        strDrink,
        strCategory,
        strAlcoholic,
        strGlass,
        strDrinkThumb,
        strInstructions,
    } = data;

    return (
        <Wrapper>
            <article>
                <h1>{strDrink}</h1>
                <Link to="/" className="back-home-link">
                    <button type="button">Back to Home</button>
                </Link>
            </article>
            <div>
                <article>
                    <img
                        src={strDrinkThumb}
                        alt={strGlass}
                        height={400}
                        width={400}
                    />
                </article>
                <article>
                    <h2>
                        Name: <span>{strDrink}</span>
                    </h2>
                    <h2>
                        Category: <span>{strCategory}</span>
                    </h2>
                    <h2>
                        Info: <span>{strAlcoholic}</span>
                    </h2>
                    <h2>
                        Glass: <span>{strGlass}</span>
                    </h2>
                    <h2>
                        Ingredients: <span>{getIngedients}</span>
                    </h2>
                    <h2>
                        Instructions: <span>{strInstructions}</span>
                    </h2>
                </article>
            </div>
        </Wrapper>
    );
};
export default LoneCocktail;
