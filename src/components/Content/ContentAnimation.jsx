import styled from "styled-components";
import { ApiServiceData } from "../../utils/ApiService";
import PlayListMasterCard from "../reUsableComponent/PlaylistMasterCard";

const master= [
    {
        masterPic :"https://i.vimeocdn.com/channels_uploaded_thumb/1300726-1649743868_340x262",
        masterArtistName: "Indigenous People...",
        masterDescription: "These vids Celebrate the lives, history of Indigenous people"
    }
]
const AnimateWrap= styled.div`
    // background-color: red; 
    width:100%;
    height:26rem;
    display:flex;
    flexx-wrap:wrap;
    
`

const ImageCarou = styled.div`
    position:relative;
    
    width:80%;
    margin:0 auto;
    &>img{
        position:absolute;
        left:0;
        -webkit-transition: opacity 1s ease-in-out;
        -moz-transition: opacity 1s ease-in-out;
        -o-transition: opacity 1s ease-in-out;
        transition: opacity 1s ease-in-out;
        width: -webkit-fill-available;
    }

    &> img:nth-of-type(1) {
        animation-delay: 4s;
    }
    
    &> img:nth-of-type(2) {
        animation-delay: 2s;
    }
    
    &> img:nth-of-type(3) {
        /* add some delay for the first picture as well */
        animation-delay: 1s;
    }

    &> img:nth-of-type(4) {
        /* add some delay for the first picture as well */
        animation-delay: 2s;
    }
    @keyframes cf3FadeInOut {
        0% {
        opacity:1;
      }
      45% {
      opacity:0;
      }
      55% {
      opacity:0;
      }
      100% {
      opacity:1;
      }
      }
      
      &>  img {
      animation-name: cf3FadeInOut;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 9s;
      animation-direction: alternate;
      }
`
const CardContent = styled.div`
margin-top:20px;
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
const CardHolder= styled.div`
width:20%; 
height:26rem; 

.img{
    
    margin-left:10%;
    margin-top:15%;
}
`


export default function ContentAnimation(){
    return(
        <AnimateWrap className="container-fluid bg-dark mb-3">
                    <CardHolder className="card text-white bg-dark mb-3">
                        <img src={master[0].masterPic} alt={"artistPic"} width={"160px"} height={"160px"} className={"rounded-circle img"}/>
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
                    </CardHolder>
             <ImageCarou className="cf3FadeInOut">
                <img className="top" src={ApiServiceData[0].thumbNail} height={"413px"} width={" 75%"}/>
                <img className="top" src={ApiServiceData[8].thumbNail} height={"413px"} width={" 75%"}/>
                <img className="top" src={ApiServiceData[2].thumbNail} height={"413px"} width={" 75%"}/>
                <img className="top" src={ApiServiceData[6].thumbNail} height={"413px"} width={" 75%"}/>
            </ImageCarou> 
        </AnimateWrap>
    )
}