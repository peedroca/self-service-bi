import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'

const Container = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 0px 50px;
`;

const LogoContainer = styled.div `
    display: flex;
    align-items: center;
`;

const MenuContainer = styled.div `
    display: flex;
    align-items: center;
`;

const Title = styled.h1 `
    font-family: sans-serif;
    font-size: 1.5em;
    color: #F9A03F;
`;

const Link = styled.a `
    font-weight: bold;
    color: white;
    margin-left: 10px;
`;

function Header() {
    return (
        <Container>
            <LogoContainer>
                <img src={Logo} alt='Logo' height={80} />
                <Title>Students Portal</Title>
            </LogoContainer>
            <MenuContainer>
                <nav>
                    <Link href='#'>Home</Link>
                    <Link href='#'>Faces</Link>
                    <Link href='#'>Contact</Link>
                    <Link href='#'>About</Link>
                </nav>
            </MenuContainer>
        </Container>
    );
}

export { Header }