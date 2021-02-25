import React from "react"
import { Link } from 'gatsby'



import styled  from 'styled-components'


export default function Home() {
  return (
    <section>
      <Container>
          <HeadingButton>
            <h2>Design Develop & Deploy</h2>
            <Link to='/about'><button>About Me</button></Link>
          </HeadingButton>
          
          <h3>UX Designer & Web Developer based in Drama/Greece</h3>
      </Container>

      <Container2>
        <h3>Case Studies</h3>
        
          <CaseStudies>
          <Link  to="/projects/websites"> 
            <CaseStudiesBlock>
              <h4>Web Sites</h4>
              <p>Some of my projects</p>
            </CaseStudiesBlock>
          </Link>

            <CaseStudiesBlock>
              <h4>UI</h4>
              <p>Some of my projects</p>
            </CaseStudiesBlock>

            <CaseStudiesBlock>
              <h4>UX</h4>
              <p>Some of my projects</p>
            </CaseStudiesBlock>
          </CaseStudies>
        
      </Container2>
      

    </section>
  )
}

const Container = styled.div`
  
  display:flex;
  align-items:center;
  
  max-width:1200px;
  min-height:50vh;
  margin:0 auto;

  h2 {
    font-family:"Poppins";
    font-weight:900;
    font-size:5rem;
    margin:0;
    line-height:5rem;
  }
  h3 {
    font-family:"Poppins";
    font-weight:500;
    font-size:3rem;
    margin:0;
    line-height:3rem;
  }
  p{
    font-family:"Poppins";
    margin:0;
    line-height:1rem;
    font-size:1rem;
    padding: 1.5rem clamp(1rem, 5%, 3rem);
  }
`



const HeadingButton = styled.div`
  display:flex;
  flex-direction:column;
  button {
    cursor:pointer;
    font-family:"Poppins";
    border:none;
    border-radius:5px;
    background:black;
    color:white;
    padding:1rem 2rem;
    margin-top:3rem;
  }
`

const Container2 = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  max-width:900px;
  min-height:50vh;
  margin:0 auto;
  margin-top:8rem;
  
  h3 {
    font-family:"Poppins";
    font-weight:500;
    font-size:4rem;
    margin:0;
    line-height:3rem;
  }
  h4{
    font-family:"Poppins";
    font-weight:500;
    font-size:2rem;
  }

  p{
    font-family:"Poppins";
    font-weight:300;
  }

  a{
    text-decoration:none;
    color:black;
    margin:0;
  }

`

const CaseStudies = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  margin:0.5rem;

`

const CaseStudiesBlock = styled.div`
  display:flex;
  flex-direction:column;

  cursor:pointer;
  background-color:orange;
  max-width:500px;
  margin:1rem;
  padding:1rem 3rem ;
  transition: transform 280ms ease-in;
  :hover {
    transform:scale(1.1);
    transform:translateY(-10px);
  }
  h4{
    font-weight:900;

  }

`
