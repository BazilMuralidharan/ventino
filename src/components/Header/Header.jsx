import styled from "styled-components";

const HeaderNavWrapper = styled.div`
 height:70px;
 position:sticky; 
 top:0; 
 z-index:3;
 text-align:center;
 &>p{
    font-weight:bold;
    padding-top:20px;
    font-size: 20px;
 }
 
`

export default function Header(){
    return(
        <HeaderNavWrapper className="container-fluid text-white bg-secondary ">
           <p>
                BAZIL MURALIDHARAN
            </p> 
        </HeaderNavWrapper>
    )
}