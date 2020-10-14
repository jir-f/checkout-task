import {css} from "styled-components";
import { opacityAnimation, dashDrawing} from '../../styles/keyframes';
import { transactionsAnimationDuration } from './Transcation';
import { statementsAnimationDuration } from './Statements';

const delay = 0.5*2;

const StyledLinks = css`
  #links {
    .transactions-link {
      opacity: 0;
      stroke-dasharray: 1000;
      stroke-dashoffset: -100;
      animation: ${dashDrawing} 0.5s ${delay}s linear forwards;
    }

    .statemetns-link {
      opacity: 0;
      stroke-dasharray: 600;
      stroke-dashoffset: 1000;
      animation: ${dashDrawing} 1.5s ${transactionsAnimationDuration}s linear forwards;
    }

    .transaction-link-dot {
      opacity: 0;
      animation: ${opacityAnimation} 0.3s ${0.6+delay}s linear forwards;
    }

    .transaction-link-ring {
      opacity: 0;
      animation: ${opacityAnimation} 0.3s ${0.5+delay}s linear forwards;
    }

    .statemetns-link-dot {
      opacity: 0;
      animation: ${opacityAnimation} 0.3s ${transactionsAnimationDuration+1.5}s linear forwards;
    }

    .statemetns-link-ring {
      opacity: 0;
      animation: ${opacityAnimation} 0.3s ${transactionsAnimationDuration+1.4}s linear forwards;
    }
  }
  .calendar-statements-link {
    opacity: 0;
    stroke-dasharray: 700;
    stroke-dashoffset: 1000;
    transform: translate(44%, -3%);
    animation: ${dashDrawing} 2s ${statementsAnimationDuration/2}s linear forwards;
  }
  .calendar-transactions-link {
    opacity: 0;
    stroke-dasharray: 700;
    stroke-dashoffset: 1000;
    transform: translate(-0.5%,38%);
    animation: ${dashDrawing} 2s ${transactionsAnimationDuration+0.8}s linear forwards;
  }

  .statements-calendar-yellow {
    opacity: 0;
    stroke-dasharray: 700;
    stroke-dashoffset: 1000;
    transform: translate(89%, 15%);
    animation: ${dashDrawing} 2s ${statementsAnimationDuration/2 + 0.5}s linear forwards;

    @media (max-width: 426px) {
      transform: translate(100%, 15%);
    }
  }

  .statements-calendar-black {
    stroke-dasharray: 700;
    stroke-dashoffset: 1000;
    transform: translate(88%, 48%);
    animation: ${dashDrawing} 2s ${statementsAnimationDuration/2 + 1}s linear forwards;
    
    @media (max-width: 426px) {
      transform: translate(100%, 15%);
    }
  }

  .transactions-calendar-link {
    stroke-dasharray: 700;
    stroke-dashoffset: 1000;
    transform: translate(34%,80%);
    animation: ${dashDrawing} 2s ${statementsAnimationDuration/2 + 1.5}s linear forwards;
  }
`;

export default StyledLinks;