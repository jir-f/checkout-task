import React, { useEffect, useState, Fragment } from 'react';
import { client } from '../prismic-configuration';
import Prismic from 'prismic-javascript'; 
import { RichText } from 'prismic-reactjs';
import styled from "styled-components";
import { Image } from '../components/Reconciliation';
import { opacityAnimation, 
  verticalAnimation,
  horizontalAnimation
} from '../styles/keyframes';

const speed = 0.5;

const Section = styled.section`
  max-width: 1350px;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 10rem 2rem;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media (max-width: 769px) {
    padding: 6rem 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 46%;
  padding-right: 4.25rem;
  
  @media (max-width: 1200px) {
    padding: 2rem 1rem;
    width: 75%;
  }

  @media (max-width: 769px) {
    width: 100%;
    padding: 0;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  margin: 1.5rem 0;
  font-weight: 500;
  overflow: hidden;
  opacity: 0;
  animation: ${verticalAnimation(-10)} ${speed}s  0.1s linear 1 forwards;
`;

const P = styled.p`
  font-size: 1.125rem;
  margin: 0 0 1.25rem 0;
  font-weight: 400;
  font-style: normal;
  line-height: 2rem;
  opacity: 0;
  animation: ${verticalAnimation(10)} ${speed}s  0.3s linear 1 forwards;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  
  span {
    font-weight: 400;
    opacity: 0;
    animation: ${horizontalAnimation(20)} 0.5s ease-in 1 forwards;
  }

  :before {
    content: '';
    display: inline-block;
    height: 1rem;
    width: 1rem;
    background: ${props => `url(${props.listStyleImage})`} no-repeat;
    background-size: contain;
    padding-right: 1rem;
    transform-origin: center;
    opacity: 0;
    animation: ${opacityAnimation} 0.5s 1s ease-in 1 forwards;
  }

  &:nth-child(${props => props.currentItem + 1}) {
    span {
      animation-delay: ${props => props.currentItem * 0.5 + 0.8 }s;
    }

    &:before {
      animation-delay: ${props => props.currentItem * 0.5 + 0.8}s;
    }
  }
`

const Reconciliation = () => {
  const [doc, setDocData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at('document.type', 'reconciliation'),
        { pageSize : 1, page : 1 }
      )
      if (response) {
        setDocData(response.results[0]);
      }
    }
    fetchData();
  }, []);

  if (doc) {
    const slice = doc.data.body[0];
    const reconciliationList = slice.primary.features_list;
    const reconciliationListImage = slice.primary.features_list_icon.url;

    return (
      <Section id="reconciliation">
        {doc && 
          <Fragment>
            <Container>
              <H2>
                {RichText.asText(slice.primary.title)}
              </H2>
              <P>
                {RichText.asText(slice.primary.description)}
              </P>
              <List>
                {reconciliationList.map((featuredItem, featuredIndex) => {
                  return (
                    <ListItem 
                      listStyleImage={reconciliationListImage}
                      currentItem={featuredIndex}
                      key={featuredIndex}>
                      <span>{featuredItem.text}</span>
                    </ListItem>
                  );
                })}
              </List>
            </Container>
            <Image />
          </Fragment>
        }
      </Section>
    );
  }
  else {
    return (<Section id="reconciliation" />)
  }
}

export default Reconciliation;