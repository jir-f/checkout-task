import {css} from "styled-components";
import { opacityAnimation, 
  horizontalAnimation,
  verticalAnimation,
  strokeAnimation,
  fillAnimation
} from '../../styles/keyframes';
import { transactionsAnimationDuration } from './Transcation';
import { lineGray, green, blackBlue, black } from '../../styles/global';

const animateLines = (total, duration, delay) => {
  let style = ``;
  for (let i = 0; i < total; i += 1) {
    style += `&:nth-child(${i}) {
      animation-delay:  ${delay + duration * (i+1)}s;
    };`
  } 
  return style;
}

const animateSummaryItems = (total, duration, delay) => {
  let style = ``;
  for (let i = 0; i < total; i += 4) {
    for (let j = 1; j < 5; j += 1) {
      style += ` &:nth-child(${j+i}) {
        animation-delay: ${delay + duration * (i+1)}s;
      };`
    }
  }
  return style;
}

const delay = transactionsAnimationDuration;
const totalLineDelay = delay + 0.5 + 0.2 * 5;
const highlightingDelay = delay + 0.5 + 0.2 * 7;
const summaryEndDelay = highlightingDelay + 0.1 * 18;
const animatedLines = animateLines(6 , 0.2, delay+0.5);

const StyledStatements = css`
  #statements {
    opacity: 0;

    animation: ${opacityAnimation} 0.5s ${delay+0.9}s linear 1 forwards;
    #statements-to {
      path.statements-to {
        opacity: 0;
        animation: ${horizontalAnimation(-20)} 0.2s linear 1 forwards;
        ${animatedLines};
      }
    }
    path.statements-to-green {
      animation: ${strokeAnimation(lineGray, green)} ${0.4}s ${highlightingDelay}s linear 1 forwards;
    }

    path.statements-to-black {
      animation: ${strokeAnimation(lineGray, blackBlue)} ${0.4}s ${highlightingDelay}s linear 1 forwards;
    }

    #statements-from {
      path.statements-from {
        opacity: 0;
        animation: ${horizontalAnimation(20)} 0.2s linear 1 forwards;
        ${animatedLines};
      }
    }

    path.statements-total {
      opacity: 0;
      animation: ${horizontalAnimation(-20)} 0.2s ${totalLineDelay}s linear 1 forwards,
        ${strokeAnimation(lineGray, green)} ${0.4}s ${highlightingDelay}s linear 1 forwards;
    }

    #statements-summary {
      rect.statements-summary-item {
        opacity: 0;
        animation: ${verticalAnimation(-20)} 0.4s ease-in-out 1 forwards;
        ${animateSummaryItems(22, 0.1, highlightingDelay)}
      }

      rect.statements-summary-tb {
        opacity: 0;
        animation: ${opacityAnimation} 0.2s ${highlightingDelay}s linear 1 forwards;
      }

      rect.statements-summary-bb {
        opacity: 0;
        animation: ${opacityAnimation} 0.2s ${summaryEndDelay}s linear 1 forwards;
      }

      rect.statements-summary-total {
        opacity: 0;
        animation: ${horizontalAnimation(-20)} 0.2s ${summaryEndDelay+0.1}s linear 1 forwards;
      }

      rect.statements-summary-sign {
        opacity: 0;
        animation: ${horizontalAnimation(20)} 0.2s ${summaryEndDelay+0.1}s linear 1 forwards,
        ${fillAnimation(lineGray, black)} 0.1s ${summaryEndDelay+0.4}s linear 1 forwards;
      }

      rect.statements-summary-sign-ring {
        opacity: 0;
        animation: ${opacityAnimation} 0.1s ${summaryEndDelay+0.5}s linear 1 forwards;
      }
    }

    .highlighted {
      opacity: 0;
      animation: ${opacityAnimation} 0.5s linear 1 forwards;
      animation-delay: ${30 * 0.1 + 0.1}s; 
    }
  }
`;

export const statementsAnimationDuration =  summaryEndDelay + 0.5;
export default StyledStatements;