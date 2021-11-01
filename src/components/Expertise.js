import * as React from "react"
import styled from "styled-components"

const Expertise = () => {
  return (
    <ExpertiseContainer>
      <ExpertiseWrapper>
        <ExpertiseH1>
          <ExpertiseSpan>|</ExpertiseSpan>Expertise
        </ExpertiseH1>
        <ExpertiseH2>
          Experienced in solutions delivery—from rapid prototyping to commercialization
        </ExpertiseH2>
        <CardContainer>
          card container
          <ExpertiseCard>
            This is a card
          </ExpertiseCard>
          <ExpertiseCard>
            This is a card
          </ExpertiseCard>
          <ExpertiseCard>
            This is a card
          </ExpertiseCard>
        </CardContainer>
      </ExpertiseWrapper>
    </ExpertiseContainer>
  )
}

export default Expertise

const ExpertiseContainer = styled.div`
  max-height: 100vh;
  padding: 0 calc((100vw - 1180px) / 2);
  position: relative;
  display: flex;
  flex-direction: column;
`

const ExpertiseWrapper = styled.div`
  margin-top: 32px;
  border-top: #707070 1px solid;
`

const ExpertiseSpan = styled.span`
  font-weight: 700;
  color: #e63946;
`

const ExpertiseH1 = styled.h1`
  color: #1d3557;
  font-size: clamp(28px, 4vw, 54px);
  line-height: clamp(36px, 4vw, 64px);
  font-weight: 300;
  margin-top: 32px;

  @media screen and (max-width: 624px) {
    margin-top: 16px;
  }
`

const ExpertiseH2 = styled.h2`
  color: #457b9d;
  font-size: clamp(16px, 4vw, 28px);
  line-height: clamp(28px, 4vw, 48px);
  font-weight: 300;
  margin-top: 16px;
`

const CardContainer = styled.div`
  flex-grow: 1;
  background: red;  
`
const ExpertiseCard = styled.div``