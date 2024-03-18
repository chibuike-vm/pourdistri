/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.article`
    .form {
        width: 90%;
        margin: 0 auto;
        margin-top: 2rem;
        padding: 0.2rem;
    }

    label,
    input {
        font-size: 1rem;
        width: 100%;
        text-transform: uppercase;
    }

    label {
        display: block;
        margin-top: 1.5rem;
        margin-bottom: 0.2rem;
    }

    legend {
        font-size: 1.3rem;
        text-transform: capitalize;
        color: #1165ed;
    }

    fieldset:nth-of-type(1) {
        margin-top: 3rem;
    }

    fieldset {
        margin: 0 auto;
        margin-bottom: 1.5rem;
        width: 80%;
    }

    input[type="submit"] {
        width: 80%;
        display: block;
        margin: 0 auto;
        margin-top: 2.5rem;
        background-color: #96ea30;
    }

    input {
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 1.5rem;
    }

    p {
        line-height: 1.5rem;
        letter-spacing: 0.05rem;
        font-size: 1.2rem;
    }
`;

const ApplicationForm = ({ state }) => {
    return (
        <Wrapper>
            <Form method="POST" className="form">
                <h1>Apply to Become a Distributor</h1>
                <p>
                    As a distributor with CocktailConduit, you&apos;ll gain
                    access to a wide range of premium cocktails crafted by
                    top-tier producers. Our platform offers seamless
                    distribution solutions, allowing you to expand your product
                    offerings and reach a broader audience of cocktail
                    enthusiasts.
                </p>

                <p>
                    Your privacy is important to us. The information provided in
                    this form will be used solely for the purpose of evaluating
                    your distributor application with CocktailConduit. We will
                    not share your personal information with third parties
                    without your consent.
                </p>
                <p>
                    Interested in distributing premium cocktails through
                    CocktailConduit? Please complete the form below with
                    accurate and detailed information. All fields are required.
                    Once you submit your application, our team will review it
                    and follow up with you regarding the next steps.
                </p>
                <fieldset>
                    <legend>profile information</legend>
                    <label htmlFor="first-name">first name</label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                    />
                    <br />

                    <label htmlFor="last-name">last name</label>
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        required
                    />
                    <br />

                    <label htmlFor="age">age</label>
                    <input type="number" name="age" id="age" required />
                    <br />

                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" required />
                    <br />

                    <label htmlFor="country-of-origin">country of origin</label>
                    <input
                        type="text"
                        name="country-of-origin"
                        id="country-of-origin"
                        required
                    />
                    <br />
                </fieldset>

                <fieldset>
                    <legend>business information</legend>
                    <label htmlFor="years-in-business">Years In Business</label>
                    <input
                        type="number"
                        name="years-in-business"
                        id="years-in-business"
                        required
                    />
                    <br />

                    <label htmlFor="distribution-area">distribution area</label>
                    <input
                        type="text"
                        name="distribution-area"
                        id="distribution-area"
                        required
                    />
                    <br />
                </fieldset>

                <input
                    type="submit"
                    value={state === "idle" ? "Submit" : "Submitting"}
                />
            </Form>
        </Wrapper>
    );
};

export default ApplicationForm;
