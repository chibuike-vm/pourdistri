/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.article`
    text-align: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 6rem;

    .intro-text {
        font-size: 1.1rem;
        text-align: left;
        letter-spacing: 0.1rem;
        line-height: 1.2rem;
        padding: 0.5rem;
    }

    h1 {
        font-size: 1.6rem;
        line-height: 1.3;
        background-image: linear-gradient(to left, #111827, #881337, #6b7280);
        padding: 1rem;
        border-radius: 0 1rem 1.5rem;
        box-shadow: 0 0 2rem #be123c;
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
        width: 90%;
        margin: 0 auto;
        font-size: 1rem;
        margin-bottom: 2rem;
        box-shadow: 0 0 0.5rem;
    }

    input[type="search"] {
        width: 60%;
        padding: 0.25rem;
    }

    input[type="submit"] {
        width: 40%;
        background-color: #1f2937;
        color: #f9fafb;
        padding: 0.25rem;
    }

    .logo-title {
        letter-spacing: 0.15rem;
        display: block;
    }

    @media only screen and (width >= 375px) {
        h1 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.3rem;
        }

        .input-div {
            font-size: 1.2rem;
        }
    }

    @media only screen and (width >= 768px) {
        h1 {
            font-size: 2.5rem;
        }

        .logo-title {
            display: inline;
        }
    }

    @media only screen and (width >= 912px) {
        margin-top: 8.5rem;
    }
`;

const SearchForm = ({ searchItem }) => {
    return (
        <Wrapper>
            <h1>
                Welcome to <span className="logo-title">PourDistri</span>
            </h1>
            <p className="intro-text">
                Discover the perfect blend of convenience and excellence with
                PourDistri, your premier destination for sourcing and
                distributing the finest cocktails worldwide. At PourDistri,
                we&apos;re committed to revolutionizing the way cocktails are
                distributed, connecting producers and distributors seamlessly to
                bring the best libations to every corner of the globe. Whether
                you&apos;re a seasoned distributor looking to expand your
                offerings or a passionate producer eager to showcase your
                creations, PourDistri provides the platform and support you need
                to thrive in the ever-evolving world of mixology. Join us on our
                journey to elevate the cocktail experience and unlock new
                opportunities with PourDistri today.
            </p>
            <Form className="form">
                <h3>
                    Kindly, use the search button to explore our cocktail
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
