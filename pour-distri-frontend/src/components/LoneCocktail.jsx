/* eslint-disable react/prop-types */
import styled from "styled-components";

const Wrapper = styled.section`
    box-shadow: 0 0.1rem 0.3rem;
    border-radius: 0.2rem;
    width: 90%;
    margin: 6rem auto;
    padding: 0.8rem;

    article:nth-child(1) {
        text-align: center;
        letter-spacing: 0.2rem;
    }

    article {
        width: 80%;
        margin: 0 auto;
    }

    article img {
        width: 100%;
        height: auto;
    }

    h1 {
        margin: 2rem 0;
        font-size: 1.5rem;
    }

    h2 {
        color: #1d6c05;
        font-size: 1.2rem;
    }

    span {
        color: #906707;
    }

    @media only screen and (width >= 850px) {
        div {
            display: flex;
            align-items: center;
            gap: 2rem;
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
            </article>

            <div>
                <article>
                    <img
                        src={strDrinkThumb}
                        alt={strGlass}
                        height={300}
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
