import React ,{useEffect, useState}from "react";
import { ApiServiceData } from "../../utils/ApiService";
import Card from "../reUsableComponent/Card";
import PlayListMasterCard from "../reUsableComponent/PlaylistMasterCard";
import styled from "styled-components";
import ContentAnimation from "./ContentAnimation";
import axios from "axios";

import { useApiHook } from "../../utils/customHook/ApiConsumeHook";

const MainContentSlideWrap = styled.div`
`
const LeftRightIcon= styled.span`
    display:flex;
    align-items:center;
    &:hover{
        cursor:pointer;
    }
    &>i{
        color:black; 
        
    }
    .disable{
        color:grey
    }
    
`
const CardContainer = styled.div`
    // background-color:black;
    width:85%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:0px 0px 0px 10px;
`



export default function MainContent(){
    ///// paginating Logic without Api_query_params_paginating_Logic
    const pagePerCont = 8 ; 
    const [splitStart, setSplitStart] = useState(0);
    const [splitEnd, setSplitEnd] = useState(8)
    const [page, setPage] = useState(1)

    ///// paginating Logic with Api_query_params_paginating_Logic
    ///// withou slicing_indexes_query_have to bbe passed 
    const apiServiceFirst = ApiServiceData.slice(0,8);
    const apiServiceSecond = ApiServiceData.slice(9,17); 
    const [state, setState] = useState(apiServiceFirst);
    const [slidePrevDisabling, setSlidePrevDisablin] = useState(true);
    const [slideNextDisabling, setSlideNextDisablin] = useState(false);

    const mutate = {
        nextPage:()=>{
            console.log('PAGEnextINC',page)
            if((page===2)){
                setSplitStart(prev=>prev+pagePerCont+1)
                setSplitEnd(prev=>prev*page+1)
            }
            if(page>2){
                return
            }
        },
        prevPage:()=>{
            if((page===1)){
                setSplitStart(prev=>prev-pagePerCont-1) // 9 - 0 
                setSplitEnd(prev=>prev-pagePerCont-1)  // 17  - 8 
               }
            if(page<0){
            return
            }
        }
    }

    const next =()=>{
        setPage(prev=>prev+1) 
       mutate.nextPage()
       console.log('nextINC',page)
    }

    const prev =()=>{
        setPage(prev=>prev-1) 
        mutate.prevPage()
        
    }

    ///// paginating Logic with Api_query_params_paginating_Logic
    ///// withou slicing_indexes_query_have to bbe passed 

    const prevButton=()=>{
        setState(apiServiceFirst)
        setSlidePrevDisablin(true)
        setSlideNextDisablin(false)
    }
    const nextButton=()=>{
        setState(apiServiceSecond)
        setSlideNextDisablin(true)
        setSlidePrevDisablin(false)
    }

////// Standard Approch for API CALL_ using axios -Logic    
    const getApiResponse= async()=>{
        try {
            const response = await axios.get(`https://bazilmuralidharan.github.io/api/ventinoApiTest.json`)
            // console.log('respponse, ', response)
            // setResonseState(response)
        } catch (error) {
            console.log('error_in_Api', error)
        }
    }
    useEffect(()=>{
        getApiResponse()
    },[])  

////   customHook approch same_API_ calll with custom fetch_logic 
    const {apiFirst, apiSecond} = useApiHook()

    return(

        <div>
        <ContentAnimation/>
        <MainContentSlideWrap className="container mt-5">
            <div className="playlist_follow">
                <span>
                    Indigineous 
                    <i className="bi bi-chevron-right " style={{marginLeft:"20px"}}></i>
                </span>
                <button className="btn btn-outline-primary " style={{marginLeft:"80%"}}>
                    <i class="bi bi-plus"></i>
                    Follow
                </button>
            </div>
            <div style={{display:"flex", marginTop:"20px"}}>
                <LeftRightIcon onClick={prevButton}>
                    <i className={slidePrevDisabling ? "bi bi-chevron-left disable" : "bi bi-chevron-left"} style={{fontSize:"60px"}}></i>
                </LeftRightIcon>  
                        <PlayListMasterCard/> 
                        <CardContainer>
                                    {state.map((el,i)=>(
                                        <Card 
                                            key={i+el.id}
                                            thumbNailImage ={el.thumbNail}
                                            thumbName = {el.musicName}
                                            avatarArtist = {el.artsitPicThumb}
                                            thumbDescription = {el.artistName}
                                        />

                                    ))}

{/*....  Conditionaling rendering appproch while using a Method_1 or Method_2 above Stated ......  */}
{/* {slidePrevDisabling&&apiFirst.map((el,i)=>(
<Card 
    key={i+el.id}
    thumbNailImage ={el.thumbNail}
    thumbName = {el.musicName}
    avatarArtist = {el.artsitPicThumb}
    thumbDescription = {el.artistName}
/>
))}

{slideNextDisabling &&apiSecond.map((el,i)=>(
<Card 
    key={i+el.id}
    thumbNailImage ={el.thumbNail}
    thumbName = {el.musicName}
    avatarArtist = {el.artsitPicThumb}
    thumbDescription = {el.artistName}
/>
))} */}


                        </CardContainer>
                <LeftRightIcon onClick={nextButton}>
                    <i className ={slideNextDisabling ? "bi bi-chevron-right disable" : "bi bi-chevron-right"}  style={{fontSize:"60px"}}></i>
                </LeftRightIcon>    
            </div>
        </MainContentSlideWrap>
        </div>
    )
}