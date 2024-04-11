import styled from 'styled-components'

const Container = styled.div `
    width: calc(35%);
    height: 450px;

    text-align: center;
    background-color: rgba(179, 194, 242, 0.4);
    
    margin-top: 50px;
    margin-left: 50px;
    padding: 10px;

    border-radius: 12px;
    box-shadow: 
        rgba(240, 46, 170, 0.4) 5px 5px, 
        rgba(240, 46, 170, 0.3) 10px 10px, 
        rgba(240, 46, 170, 0.2) 15px 15px, 
        rgba(240, 46, 170, 0.1) 20px 20px, 
        rgba(240, 46, 170, 0.05) 25px 25px;
`;

const CardGrid = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 200px;
    
    justify-content: center;
`;

const Title = styled.h1 `
    margin-bottom: 20px;

    font-family: sans-serif;
    font-size: 1.5em;
    color: #F9A03F;
`;

const Description = styled.h2 `
    font-family: sans-serif;
    font-size: 1.2em;
    color: white;
`;

const Image = styled.img `
    height: 250px;
`;

function Card({ title, description, image }) {
    return (
        <Container>
            <Image 
                src={image} 
                alt='Learning with data' 
            />
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    );
}

export { Card, CardGrid }
