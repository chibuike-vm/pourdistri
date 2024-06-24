import { useRouteError } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    margin: 6rem auto;
    padding: 0.5rem;

    h2 {
        font-size: 1rem;
    }

    span {
        color: #f43f5e;
        text-transform: uppercase;
    }

    p {
        font-size: 1rem;
    }

    @media only screen and (width >= 912px) {
        margin-top: 10rem;
    }
`;

const SinglePageError = () => {
    const error = useRouteError();

    if (!error.request.status) {
        return (
            <Wrapper>
                <h2>
                    <span>Error:</span> {error.message}
                </h2>
                <p>Please, check your internet connection.</p>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <h2>
                <span>error: </span>
                {error.message}
            </h2>
        </Wrapper>
    );
};
export default SinglePageError;
