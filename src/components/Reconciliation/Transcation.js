import {css} from "styled-components";
import { opacityAnimation, 
  verticalAnimation,
  fillAnimation
} from '../../styles/keyframes';
import { lineGray, black } from '../../styles/global';

const delay = 1.6;

const animateLines = (total, duration) => {
  let style = ``;
  for (let i = 0; i < total; i += 4) {
    for (let j = 2; j < 6; j += 1) {
      style += ` &:nth-child(${j+i}) {
        animation-delay: ${delay + duration * (i+1)}s;
      };`
    }
  }
  return style;
}

const StyledTransaction = css`
  #transactions {
    opacity: 0;
    animation: ${opacityAnimation} 0.5s ${delay - 0.1}s linear 1 forwards;
    
    rect.transaction-line {
      opacity: 0;
      animation: ${(verticalAnimation(-20))} 0.4s ease-in-out 1 forwards ,
          ${fillAnimation(lineGray, lineGray)} 0.1s ${delay}s linear 1 forwards;
      ${animateLines(30 , 0.1)};

      &-highlighted {
        opacity: 0;
        animation: ${opacityAnimation} 0.1s ${30 * 0.1 + delay}s linear 1 forwards,
          ${fillAnimation(lineGray, black)} 0.4s ${30 * 0.1 + delay}s linear 1 forwards;
      }
    }
  
    .highlighted {
      opacity: 0;
      animation: ${opacityAnimation} 0.5s linear 1 forwards;
      animation-delay: ${30 * 0.1 + 1.3}s 
    }
  }
`;

export const transactionsAnimationDuration = (30 * 0.1 + delay + 0.4) * .25; // total number of lines + line animation duration + delay + last animation

export default StyledTransaction;