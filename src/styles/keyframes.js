import { keyframes } from "styled-components";

export const scale = keyframes`
  0% {
    opacity: 0;
		transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const lineDrawing = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-10%);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`

export const opacityAnimation = keyframes`
	0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
`
