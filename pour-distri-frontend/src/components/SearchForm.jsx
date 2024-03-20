/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.article`
    text-align: center;
    width: 90%;
    margin: 0 auto;

    h3 {
        font-size: 1.3rem;
        letter-spacing: 0.05rem;
        line-height: 1.5rem;
    }

    form {
        width: 90%;
        margin: 0 auto;
        padding: 0.2rem;
    }

    .input-div {
        display: flex;
        justify-content: center;
        width: 90%;
        margin: 0 auto;
        font-size: 1rem;
        margin-bottom: 2rem;
        box-shadow: 0 0 0.5rem#d1d5db;
    }

    input[type="search"] {
        width: 60%;
        padding: 0.1rem;
    }

    input[type="submit"] {
        width: 40%;
        background-color: #1f2937;
        color: #f9fafb;
        padding: 0.1rem;
    }

    @media only screen and (width > 280px) {
        .input-div {
            font-size: 1.2rem;
        }
    }
`;

const SearchForm = ({ searchItem }) => {
    return (
        <Wrapper>
            <Form className="form">
                <h3>
                    Kindly use the search box to explore our cocktail inventory.
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
