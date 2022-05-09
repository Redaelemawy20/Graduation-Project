import styled from "styled-components"
export default styled.section`
:root{
    --blue:#147499;
    --white:#ffffff;
    --orange:#F6852B;
}

    width: 100%;
    padding:3% 0 6% 0 ;
    min-width: 350px;
    padding-bottom: 0;
h1{
    font-size: 3rem;
}
 .Title{
    width: 350px;
    margin: auto;
    text-align: center;
    border-bottom: 2px solid var(--orange);
}
.Organize{
    width: 90%;
    /*display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;*/
    padding: 7% 0;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    min-width: 350px;
        
}
@media(max-width:1100px){
     .Organize{
        grid-template-columns: repeat(2,1fr);
    }
}
@media(max-width:450px){
    
        min-width: 280px;
    
     .Organize{
        grid-template-columns: repeat(1,1fr);
        min-width: 280px;
    }
     .Title{
    width: 270px;
    }
}
`;