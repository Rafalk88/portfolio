import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  margin-top: 130px;
`;

const MainArticle = styled.article`
  width: 60%;

  header{
    color: rgba(222, 222, 222, 1);
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.375rem;
    letter-spacing: -0.5px;
    margin-bottom: 2rem;
  }

  header>span:first-child{
    color: rgba(255, 83, 152, 1);
  }

  header>span:nth-child(2){
    color: rgba(0, 87, 255, 1);
  }

  &>article{
    color: rgba(149, 149, 149, 1);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;
    letter-spacing: -0.5px;
    text-align: justify;
    margin-bottom: 3.813rem;
  }

  footer{
    width: 148px;
    height: 32px;
    color: rgba(222, 222, 222, 1);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: 1.5px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  footer>span:nth-child(1){
    margin: 0 6px 0 8px;
  }

  footer>span:nth-child(2){
    display: none;
  }
`;

const Aside = styled.aside`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Hero: React.FC = () => (
  <Section>
    <MainArticle>
      <header>
        Cześć,
        {' '}
        <span>&lt;</span>
        {' '}
        napiszemy
        {' '}
        <span>&gt;</span>
        <br />
        coś razem?
      </header>
      <article>
        Jestem w trakcie przebranżowienia zawodowego.
        W swoim czasie wolnym poszerzam swoją wiedzę w zakresie JavaScript.
        <br />
        W lutym tego roku dołączyłem do kursu poszerzającego moją front-endową wiedzę.
        W ramach Akademii Samouka przygotowuję się do podjęcia swojej pierwszej pracy
        jako front-end developer.
      </article>
      <footer>
        <span>&gt;</span>
        <span>&#8744;</span>
        PORTFOLIO
      </footer>
    </MainArticle>
    <Aside>
      <figure><img src="" alt="avatar" /></figure>
      <section>
        <article>RAFAŁ KOCHANECKI</article>
        <article>Front-end developer</article>
      </section>
    </Aside>
  </Section>
);

export default Hero;
