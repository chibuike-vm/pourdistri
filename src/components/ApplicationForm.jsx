/* eslint-disable react/prop-types */
import { Form } from "react-router-dom";
import styled from "styled-components";
import deliveryTruckSvg from "../assets/images/delivery-truck.svg";

const Wrapper = styled.article`
    margin-top: 2rem;
    padding: 1rem 0.5rem;

    .form {
        width: 100%;
        margin: 0 auto;
        margin-top: 1rem;
    }

    label,
    input {
        width: 100%;
        text-transform: capitalize;
        border-radius: 5px;
    }

    input[type="email"] {
        text-transform: lowercase;
    }

    label {
        font-size: 1.05rem;
        display: block;
        margin-top: 1.5rem;
        margin-bottom: 0.2rem;
        font-weight: 600;
    }

    legend {
        font-size: 1.1rem;
        text-transform: capitalize;
        font-weight: 600;
        color: #9f1239;
    }

    fieldset:nth-of-type(1) {
        margin-top: 3rem;
    }

    fieldset {
        margin: 0 auto;
        margin-bottom: 1.5rem;
        box-shadow: 0 0 1rem #d1d5db;
        border-radius: 10px;
    }

    input[type="submit"] {
        display: block;
        margin: 0 auto;
        margin-top: 2.5rem;
        background-color: #1f2937;
        color: #f9fafb;
        padding: 0.25rem;
        border-radius: 7px;
        font-size: 1.05rem;
    }

    input {
        margin-bottom: 1rem;
        background-color: #fff1f2;
        box-shadow: 0 0 1rem #d1d5db;
        padding: 0.2rem;
        font-size: 1rem;
    }

    .spec-label {
        text-transform: none;
    }

    h1 {
        margin-top: 1rem;
        font-size: 1.25rem;
        margin-bottom: 0.4rem;
    }

    p {
        line-height: 1.2rem;
        margin-top: 0;
    }

    img {
        display: block;
        margin: 0 auto;
        height: auto;
        width: 100%;
    }

    @media only screen and (width >= 768px) {
        .formAndSvgContainer {
            display: flex;
            align-items: center;
        }

        section article {
            width: 50%;
        }

        section article:nth-of-type(1) {
            width: 50%;
        }
    }

    @media only screen and (width >= 912px) {
        margin-top: 2.8rem;
    }
`;

const ApplicationForm = ({ state }) => {
    return (
        <Wrapper>
            <Form method="POST" className="form">
                <h1>Become a Distributor</h1>
                <p>
                    As a distributor with PourDistri, you&apos;ll gain access to
                    a wide range of premium cocktails crafted by top-tier
                    producers. Our platform offers seamless distribution
                    solutions, allowing you to expand your product offerings and
                    reach a broader audience of cocktail enthusiasts.
                </p>

                <p>
                    Your privacy is important to us. The information provided in
                    this form will be used solely for the purpose of evaluating
                    your distributor application with PourDistri. We will not
                    share your personal information with third parties without
                    your consent.
                </p>
                <p>
                    Interested in distributing premium cocktails through
                    PourDistri? Please complete the form below with accurate and
                    detailed information. All fields are required. Once you
                    submit your application, our team will review it and follow
                    up with you regarding the next steps.
                </p>

                <section className="formAndSvgContainer">
                    <article>
                        <img
                            src={deliveryTruckSvg}
                            alt="Delivery Truck Image"
                        />
                    </article>

                    <article>
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
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                            />
                            <br />

                            <label
                                htmlFor="country-of-origin"
                                className="spec-label"
                            >
                                Country of Origin
                            </label>
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
                            <label
                                htmlFor="years-in-business"
                                className="spec-label"
                            >
                                Years in Business
                            </label>
                            <input
                                type="number"
                                name="years-in-business"
                                id="years-in-business"
                                required
                            />
                            <br />

                            <label htmlFor="distribution-area">
                                distribution area
                            </label>
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
                    </article>
                </section>
            </Form>
        </Wrapper>
    );
};

export default ApplicationForm;
