import styled, { keyframes } from "styled-components";


export const textAnimationUp = keyframes`
    0%{
        transform: translateY(30px);
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const planeAnimation = keyframes`
    0% {

    }
    30% {
        transform: 
            scale(0.9)
            translateX(-5px)
            translateY(-3px) 
    }
    100%{
        transform: 
            translateX(-2px)
            rotate(-35deg)
            translateY(3px) 
    }
`

export const planeAnimationOnClick = keyframes`
    0% {
        transform: 
            translateX(-2px)
            translateY(3px) 
            rotate(-40deg)
    }
    60%{
        transform: 
            translateX(-10px)
            translateY(3px) 
            rotate(40deg)
    }
    100%{
        transform: 
            translateX(115px)
            rotate(50deg)
            scale(1)
    }
`

export const menuAnimationOpen = keyframes`
    0% {
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        color: pink;
    }
`;


export const menuToClose = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: translateY(-27px);
    }
`

export const closeToMenu = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        transform: translateY(-33px);
    }
`


export const MenuToCloseBackwards = keyframes`
    0% {
        transform: translateY(-20px);
        opacity: 0;
    }
    40% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const bgAnimationOpen = keyframes`
    from {
        transform: translateY(-900px);
    }
    to {
        visibility: block;
    }
`

export const bgAnimationClose = keyframes`
    from {
        transform: translateY(-900px);
    }
    to {
        visibility: block;
    }
`
