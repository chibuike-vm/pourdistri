/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;

    form {
        width: 100%;
        margin: 0 auto;
        padding: 0.5rem 0;
    }

    .input-div {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 0 auto;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        padding: 0.3rem 0.5rem;
    }

    input[type="search"] {
        width: 65%;
        padding: 0.3rem 0.4rem;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
        box-shadow: 0 0 0.2rem#d1d5db;
    }

    input[type="submit"] {
        width: 35%;
        background-color: #9f1239;
        color: #f9fafb;
        padding: 0.3rem 0.4rem;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        box-shadow: 0 0 0.2rem#d1d5db;
    }

    @media only screen and (width >= 640px) {
        .input-div {
            width: 80%;
        }
    }

    @media only screen and (width >= 850px) {
        .input-div {
            width: 60%;
        }
    }
`;

const SearchForm = () => {
    return (
        <Wrapper>
            <Form className="form">
                <div className="input-div">
                    <input
                        type="search"
                        name="search"
                        placeholder="search our cocktail"
                    />
                    <input type="submit" value="Search" />
                </div>
            </Form>
        </Wrapper>
    );
};
export default SearchForm;
