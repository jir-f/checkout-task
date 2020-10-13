import React, { useEffect, useState, Fragment } from 'react';
import { client } from '../prismic-configuration';
import Prismic from 'prismic-javascript'; 
import { RichText } from 'prismic-reactjs';
import styled from "styled-components";
import { Image } from '../components/Reconciliation';

const Section = styled.section`
  max-width: 1222px;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 6rem 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 46%;
  padding-right: 4.25rem;
`;

const H2 = styled.h2`
  font-size: 2rem;
  margin: 1.5rem 0;
  font-weight: 500;
`;

const P = styled.p`
  font-size: 1.125rem;
  margin: 0 0 1.25rem 0;
  font-weight: 400;
  font-style: normal;
  line-height: 2rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  font-weight: 400;
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  :before {
    content: '';
    display: inline-block;
    height: 1rem;
    width: 1rem;
    background: ${props => `url(${props.listStyleImage})`} no-repeat;
    background-size: contain;
    padding-right: 1rem;
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
    console.log(doc.data);
    const slice = doc.data.body[0];
    const reconciliationList = slice.primary.features_list;

    console.log(reconciliationList);
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
                    <ListItem listStyleImage={slice.primary.features_list_icon.url} key={featuredIndex}>
                      {featuredItem.text}
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
    return (<h1>Loading...</h1>)
  }
}

export default Reconciliation;