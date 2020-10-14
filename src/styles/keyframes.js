import { keyframes } from "styled-components";

export const horizontalAnimation = (x) => keyframes`
	0% {
		opacity: 0;
		transform: translateX(${x}px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`

export const verticalAnimation = (y) => keyframes`
	0% {
		opacity: 0;
		transform: translateY(${y}px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
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

export const fillAnimation = (start, finish) => keyframes`
	0% {
		fill: ${start};
	}

	100% {
		fill: ${finish};
	}
`

export const strokeAnimation = (start, finish) => keyframes`
	0% {
		stroke: ${start};
	}

	100% {
		stroke: ${finish};
	}
`

export const dashDrawing = keyframes`
	100% {
		opacity: 1;
    stroke-dashoffset: 0;
  }
`;