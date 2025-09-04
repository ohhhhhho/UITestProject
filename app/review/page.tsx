'use client'
import { reviewData } from "@/data";
import styled from "styled-components";

interface StarProps {
  rate: number;
}

export default function Review(){
    return(
        <>
            <Wrap>
                <Inner>
                    <ReviewWrap>
                        {reviewData.map((i,idx) => 
                            <ReviewItem key={i.id}>
                                <span>{i.id}</span>
                                <h6>{i.user}</h6>
                                <StarRating rate={i.count}></StarRating>
                                <p>{i.title}</p>
                                <p>{i.desc}</p>
                            </ReviewItem>
                        )}
                    </ReviewWrap>
                </Inner>
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
    background:#000;
    width:100%;
    height:auto;
    display: flex;
    max-width:100%;
    align-items: center;
    justify-content: center;
    padding:20px 40px;
    
    @media (min-width:768px){
        height:100vh;
        padding:0 40px;
    }  
`
const Inner = styled.div` 
`
const ReviewWrap =  styled.ol`
    column-count:1;
    column-gap: 20px;

    @media (min-width:768px){
        column-count:4;
    }   
`
const ReviewItem = styled.li`
    break-inside:avoid;
    border:solid 1px #fff;
    color:#fff;
    margin-bottom: 20px;
    text-align:center;
    display:flex;
    flex-direction: column;
    padding:10px;
    box-shadow: 7px 8px 0px 0px #fff;

    &:last-child{
        margin-bottom: 0;
    }

    @media (min-width:768px){
        padding: 0
        
    } 
`
const StarRating = styled.span<StarProps>`
    width:auto;
    margin:0 auto;
    &::after{
        content:'';
        display:block;
        background:url('/star.png') repeat-x;
        background-size:20px;
        width: ${props => props.rate * 20}px;
        height:20px;
    }
`