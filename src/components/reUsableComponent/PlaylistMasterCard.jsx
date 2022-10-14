import { Button } from "bootstrap"
import styled from "styled-components"

const master= [
    {
        masterPic :"https://i.vimeocdn.com/channels_uploaded_thumb/1300726-1649743868_340x262",
        masterArtistName: "Indigenous People...",
        masterDescription: "These vids Celebrate the lives, history of Indigenous people"
    }
]

const CardWrap = styled.div`
width:15rem;
height:20rem;


.musicName{
    color:#3A5161; 
}
`
const CardContent = styled.div`
margin-top:70px;
.artistDesc{
    color:#879CAB;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 0.7rem;
}
.artistSection{
    display:flex;
    align-items:center;
    .p{
        margin-left:10px;
    }
}
`
const ImageWrapped= styled.div`
background-color:grey;
width:14.8rem;
height:120px;


&>img{
    margin-left:16%;
    margin-top:5%;
}
`

export default function PlayListMasterCard(){
    return(
        <div>
            <CardWrap className="card" >
                <ImageWrapped>
                    <img src={master[0].masterPic} alt={"artistPic"} width={"160px"} height={"160px"} className={"rounded-circle img"}/>
                </ImageWrapped>
                <CardContent className="card-body" style={{padding:'10px'}}>
                    <h5 className="card-title">{master[0].masterArtistName}</h5>
                    <div className="artistSection">
                        <p className="card-text artistDesc p">{master[0].masterDescription}</p>
                    </div>
                    <button className="btn btn-primary" style={{width:"100%",display:"flex", justifyContent:"center"}}>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <i className="bi bi-play-fill" ></i>
                            <span style={{fontSize:"13px", textAlign:"center", paddingLeft:"10px"}}>
                                Watch Now
                            </span>
                        </div>
                    </button>
                </CardContent>
            </CardWrap>
        </div>
    )
}