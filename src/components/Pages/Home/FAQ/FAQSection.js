import React from 'react';
import styled from 'styled-components';
//import { InnerLayout } from '../styles/Layouts';
import lines from './lines.svg';
import questions from './questions';
import Question from './Question';
import GlobalStyle from './GlobalStyle';
function FAQSection() {
    return (
        
        <OuterLayout>
        <GlobalStyle />
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">FREQUENTLY <span className='faqspan'>ASKED QUESTIONS </span></h3>
                <p className="c-para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Assumenda maxime ipsa nam expedita dolorem distinctio illo 
                    ad doloribus atque fuga, Nihil laboriosam beatae fugit.
                </p>
               
                <div className="questions-con">
                    {
                        questions.map((q)=>{
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>
                
            </InnerLayout>
        </FaqStyled>
        
        
        </OuterLayout>
        
    )
}

const FaqStyled = styled.section`
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .questions-con{
        padding-top: 4rem;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }

`;
const InnerLayout = styled.section`
    padding: 8rem 0;
`;
const OuterLayout = styled.section`
    padding: 5rem 18rem;
    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
`;

export default FAQSection;
