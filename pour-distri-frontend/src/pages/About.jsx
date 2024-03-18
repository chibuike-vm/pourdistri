import { about as aboutData } from "../assets/data/about";
import styled from "styled-components";

const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    padding: 0.8rem;

    article {
        line-height: 1.5rem;
        letter-spacing: 0.1rem;
    }

    article h1 {
        font-size: 1.6rem;
    }

    article h2 {
        font-size: 1.4rem;
    }

    article p span {
        font-weight: 700;
    }

    ul {
        padding-left: 0;
    }

    p {
        font-size: 1.2rem;
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
