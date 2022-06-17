import React from 'react'
import styled  from "styled-components";

export default function Videos() {
  return (
    <Section>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VWEowbox8EI"
         title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Section>
  )
}
const Section = styled.section`
margin: 4rem 9rem;
text-align: center;
`;