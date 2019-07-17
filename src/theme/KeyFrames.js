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


// export const bgAnimationClose = keyframes`
//     0% {
//         transform: translateY(-900px);        
//     }
//     100% {
//         opacity: 0;
//     }
// `