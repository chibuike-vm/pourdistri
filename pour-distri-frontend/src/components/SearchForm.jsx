/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.article`
    text-align: center;
    width: 90%;
    margin: 0 auto;

    h1 {
        font-size: 1.6rem;
    }

    h3 {
        font-size: 1.2rem;
    }

    form {
        width: 90%;
        margin: 0 auto;
        padding: 0.2rem;
    }

    .input-div {
        display: flex;
        background-color: green;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
        font-size: 0.8rem;
        margin-bottom: 2rem;
    }

    input[type="search"] {
        width: 70%;
    }

    input[type="submit"] {
        width: 30%;
        background-color: #96ea30;
    }

    .logo-title {
        letter-spacing: 0.2rem;
    }

    @media only screen and (width >= 375px) {
        h1 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        .input-div {
            font-size: 1.3rem;
        }
    }

    @media only screen and (width >= 768px) {
        h1 {
            font-size: 3rem;
        }
    }
`;

const SearchForm = ({ searchItem }) => {
    return (
        <Wrapper>
            <h1>
                Welcome to <br />
                <span className="logo-title">CocktailConduit!</span>
            </h1>
            <Form className="form">
                <h3>
                    Kindly, use the search button to explore our cocktail stock
                    inventory.
                </h3>
                <div className="input-div">
                    <input
                        type="search"
                        name="search"
                        defaultValue={searchItem}
                    />
                    <input type="submit" value="Search" />
                </div>
            </Form>
        </Wrapper>
    );
};
export default SearchForm;
