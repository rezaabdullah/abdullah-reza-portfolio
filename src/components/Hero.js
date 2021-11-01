import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from "typewriter-effect"
import { GrLinkedin, GrGithub, GrMedium } from "react-icons/gr"
import { Link } from "gatsby"
import { Button } from "./Button"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>Hi, I'm Abdullah Reza</HeroH1>
        <HeroH2>
          <Typewriter
            options={{
              strings: ["Product Manager", "Data Scientist", "Mechanical Engineer", "Philomath"],
              autoStart: true,
              loop: true,
              wrapperClassName: HeroH2,
            }}
          />
        </HeroH2>
        <HeroP>
          Generalized specialist with expertise in building data driven business solutions. Intrigued by multifaceted nature of human dynamics and strongly believe that good solutions must have a human narrative at its core.
        </HeroP>
        <HeroCTA>
          <HeroIcon>
            <IconLink to="/"><GrLinkedin /></IconLink>
            <IconLink to="/"><GrGithub /></IconLink>
            <IconLink to="/"><GrMedium /></IconLink>
          </HeroIcon>
          <Button to="/">Contact Me</Button>
        </HeroCTA>
      </HeroContent>
      <HeroImage>
        <StaticImage src="../images/abdullah_reza_profile_square.jpg" alt="Profile picture of Abdullah Reza"  layout="constrained"/>
      </HeroImage>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  padding: 0 calc((100vw - 1180px) / 2);
  position: relative;
  height: 616px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: 624px) {
    display: flex;
    flex-direction: column;
  }
`

const HeroContent = styled.div`
  flex-grow: 1;
  width: calc((100vw - 1180px) / 2);
  margin-top: 32px;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  // @media screen and (max-width: 1024px) {
  //   margin: 64px 0 0 0;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: flex-start;
  // }

  @media screen and (max-width: 624px) {
    margin-top: 16px;
    padding: 0 4px;
    width: 100%;
    justify-content: flex-start;
  }
`
const HeroImage = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  width: calc((100vw - 1180px) / 2);
  // margin: 32px 4px;
  margin-top: 32px;
  padding: 0 4px;

  // @media screen and (max-width: 1024px) {
  //   margin: 64px 0 0 0;
  // }

  @media screen and (max-width: 624px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    padding: 0 4px;
  }
`

const HeroH1 = styled.h1`
  color: #1d3557;
  font-size: clamp(28px, 4vw, 54px);
  line-height: clamp(36px, 4vw, 64px);
  font-weight: 300;
`

const HeroH2 = styled.h2`
  color: #e63946;
  font-size: clamp(16px, 4vw, 32px);
  line-height: clamp(22px, 4vw, 40px);
  font-family: "IBM Plex Mono";
  font-weight: 300;
  margin-top: 24px;
`

const HeroP = styled.p`
  margin-top: 16px;
  color: #457b9d;
  font-size: clamp(12px, 2vw, 20px);
  line-height: clamp(26px, 4vw, 32px);
  font-weight: 400;
  width: 90%;

  @media screen and (max-width: 624px) {
    width: 100%;
  }
`

const HeroCTA =styled.div`
  width: 90%;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 624px) {
    width: 100%;
    margin: 16px 8px 0 0;
  }
`

const HeroIcon = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
`

const IconLink = styled(Link)`
  font-size: 32px;
  line-height: 24px;
  color: #1d3557;
  margin:0 32px 0 0;
  cursor: pointer;
`