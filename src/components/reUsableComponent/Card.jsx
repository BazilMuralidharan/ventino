import styled from "styled-components"

const CardWrap = styled.div`
width:11rem;
height:8.5rem;

.musicName{
    color:#3A5161; 
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 0.5rem;
    font-weight:bold;
    
}
`
const CardContent = styled.div`
// margin-top:0.2px;
.artistDesc{
    color:#879CAB;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 0.5rem;
    
}
.artistSection{
    display:flex;
    align-items:center;
    .p{
        margin-left:1px;
    }
}
`
export default function Card({ thumbNailImage,    thumbName, avatarArtist, thumbDescription }){
    return(
        <div style={{padding:"0px"}}>
        <CardWrap className="card" 
        style={{border:"none"}}
        >
            <img src={thumbNailImage} alt={thumbName}/>

                <CardContent className="card-body-flex">

                    <h5 className="card-title musicName">{thumbName}</h5>
                    <div className="artistSection">
                        <img src={avatarArtist}
                        className="rounded-circle" width={"16px"}/>
                        <p className="card-text artistDesc p ">{thumbDescription}</p>

                    </div>
                            
                </CardContent>
            
            
        </CardWrap>
        </div>
    )
}