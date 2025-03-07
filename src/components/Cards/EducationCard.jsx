import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
      box-shadow: 0 4px 5px 3px rgba(222, 222, 222, 0.46) !important;
  color: white !important;
  background-color: transparent !important;
  opacity: 0.9 !important;
  transition: all 0.5s ease 0s !important;
  height: 100% !important;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solidrgb(92, 5, 71); /* Border color */
    
    &:hover {
        box-shadow: 0px 0px 20px rgba(248, 143, 229, 0.2);
        transform: translateY(-5px);
        background-color: #EFEFEF; /* Darker background on hover */
    }

    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document} {
        display: flex;
    }

    &:hover ${Span} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Name = styled.div`
    font-size: 24px;
    font-weight: 600;
    color:rgb(255, 255, 255); /* Dark gray color */
    
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`

const Degree = styled.div`
    font-size: 18px;
    font-weight: 500;
    color:rgb(241, 219, 219); /* Light gray color */
    
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 14px;
    font-weight: 400;
    color:rgb(146, 146, 146); /* Even lighter gray for date */
    
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #854CE6; /* Purple color for the grade */
    
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`




const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            
        </Card>
    )
}

export default EducationCard