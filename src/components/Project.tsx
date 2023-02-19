import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;

  &>header{
    color: rgba(255,255,255,1);
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3.348rem;
    letter-spacing: -0.5px;
    margin-bottom: 2.563rem;
  }

  &>article{
    display: flex;
    justify-content: space-between;
    margin-bottom: .625rem;
  }

  &>article>p{
    color: rgba(149, 149, 149, 1);
    width: 60%;
    padding-right: 1.12rem;
    font-family: Manrope;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.25rem;
    letter-spacing: -0.5px;
    text-align: justify;
  }

  &>article>figure{
    width: 40%;
    padding-left: 1.12rem;
  }

  &>footer{
    display: flex;
    justify-content: end;
  }

  &>footer>div{
    width: 143px;
    height: 64px;
    border: 1px solid rgba(0, 87, 255, 1);
    border-style: dashed;
    border-radius: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 87, 255, 1);
    margin-left: 2.0063rem;
  }

  &>footer>a{
    width: 179px;
    height: 64px;
    border: none;
    border-radius: 4px;
    background-color: rgba(171, 192, 233, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2.0063rem;

    &:hover{
      background-color: rgba(188, 205, 237, 1);
    }
  }
`;

type ProjectProps = {
  title: string
  text: string
  img: string
  stack: string[]
  gitHubLink: string
  demoLink?: string | null
};

const Project: React.FC<ProjectProps> = (props) => {
  const {
    title,
    text,
    img,
    stack,
    gitHubLink,
    demoLink,
  } = props;

  return (
    <Section>
      <header>{title}</header>
      <article>
        <p>{text}</p>
        <figure><img src={img} alt="Project" /></figure>
      </article>
      <footer>
        {stack.map((item) => <div>{item}</div>)}
        <a href={gitHubLink} role="button">Zobacz kod</a>
        { (demoLink)
          ? <a href={demoLink} role="button">Zobacz demo</a>
          : null}
      </footer>
    </Section>
  );
};

Project.defaultProps = {
  demoLink: null,
};

export default Project;
