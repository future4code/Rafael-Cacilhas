
import styled from 'styled-components';

const Container = styled.div`
background-color: #5e1b15;
width:  60px;
height: 40px;
`

const Barra = styled.div`
border-left:        25px solid transparent;
border-right:       25px solid transparent; 
border-bottom:      25px solid black;
width:              0;
height:             0;
position:           relative;
top:                50%;
left:               50%;
border-bottom-color: #ffdfc6;
transform:          translate(-25px,-70px); // topo claro

&:nth-child(1) {
        border-bottom-color:    #bf5075 ; //base escura
        transform:      translate(-25px,-10px);
    }

&:nth-child(2) {
        border-bottom-color:   #e3b1c2 ; //meio
        transform:      translate(-25px, -40px);
    }
`



const logo = () => {
    return(
        <Container>
            <Barra> </Barra>
            <Barra> </Barra>
            <Barra> </Barra>
        </Container>
    )
}
export default logo