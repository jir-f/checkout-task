import {css} from "styled-components";
import { opacityAnimation, 
  verticalAnimation,
  fillAnimation,
  strokeAnimation } from '../../styles/keyframes';
import { navyBlue, green, orange } from '../../styles/global';

const speed = 0.5;

const StyledCalendar = css`
  #calendar {
    position: relative;
    width: 100%;
    opacity: 0;
    animation: ${opacityAnimation} ${speed}s linear 1 forwards;
  
    path.calendar-date {
      opacity: 0;
      animation: ${verticalAnimation(-20)} ${speed}s ${speed}s linear 1 forwards;
    }
  
    path.calendar-paragraph {
      opacity: 0;
      animation: ${verticalAnimation(-20)} ${speed}s ${speed}s linear 1 forwards;
  
      &.highlighted {
        animation: ${verticalAnimation(-20)} ${speed}s ${speed+0.3}s linear 1 forwards, 
          ${strokeAnimation(navyBlue, green)} ${speed}s ${speed*2}s linear 1 forwards;
      }
    }
  
    circle.calendar-dot {
      opacity: 0;
      animation: ${opacityAnimation} ${speed}s ${speed+0.1}s linear 1 forwards;
      
      &.highlighted {
        animation: ${opacityAnimation} ${speed}s ${speed+0.1}s linear 1 forwards, 
          ${fillAnimation(green, orange)} ${speed}s ${speed*2}s linear 1 forwards;
      }
    }
  
    circle.calendar-dot-ring {
      opacity: 0;
      animation: ${opacityAnimation} ${speed}s ${speed*2}s linear 1 forwards;
    }
  }
`;

export default StyledCalendar;