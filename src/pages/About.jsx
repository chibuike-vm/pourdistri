import { about as aboutData } from "../data/about";
import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;
    margin: 0 auto;
    margin-top: 2.2rem;
    padding: 1rem 0.5rem;

    article {
        line-height: 1.2rem;
        margin-bottom: 2rem;
    }

    article h1 {
        font-size: 1.25rem;
        margin-bottom: 0.4rem;
    }

    article h2 {
        font-size: 1.15rem;
        margin-bottom: 0.15rem;
    }

    article p span {
        font-weight: 600;
    }

    ul {
        padding-left: 20px;
        margin-top: 0.15rem;
    }

    p {
        font-size: 1rem;
        margin-top: 0.4rem;
    }

    @media only screen and (width >= 912px) {
        margin-top: 3rem;
    }
`;

const About = () => {
    return (
        <Wrapper>
            {aboutData.map((eachAboutData, index) => {
                const { title, content } = eachAboutData;
                return (
                    <article key={title}>
                        {index === 0 ? <h1>{title}</h1> : <h2>{title}</h2>}
                        {content?.lists?.map((eachList) => {
                            const { listTitle, list } = eachList;
                            return (
                                <ul key={listTitle}>
                                    <li>
                                        <p>
                                            <span>{`${listTitle}: `}</span>
                                            {list}
                                        </p>
                                    </li>
                                </ul>
                            );
                        }) || <p>{content}</p>}
                    </article>
                );
            })}
        </Wrapper>
    );
};
export default About;
