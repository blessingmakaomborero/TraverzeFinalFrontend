import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    :root{
        --purple-primary: #1770b0;
        --accent-pink: black;
        --neutral-light:  #1770b0;
        --lavender-secondary: black; /*Primary Font Color*/
        --dark-primary:  #1770b0;
        --border-colour: #6c757d;
        
    }


    a{
        color:  #1770b0;
    }
    p{
        color: var(--lavender-secondary);
        line-height: 1.9rem;
    }
    .secondary-heading{
        font-size: 3rem;
        color: var(--purple-primary);
        
    }
    .small-heading{
        font-size: 1.8rem;
        color: var(--purple-primary);
        text-align: center;
    }
    .faqspan{
        color: var(--accent-pink);
    }

    //Utilities
    .c-para{
        text-align: center;
    }

  
`;

export default GlobalStyle;