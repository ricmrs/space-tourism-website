import styled, { css, keyframes } from "styled-components";
import Text from "../Text";

const pulse = keyframes`
	0% {
		box-shadow: 0 0 0 0 #9797974c;
	}

	100% {
		box-shadow: 0 0 0 60px #9797974c;
	}
`
const animation = () =>
  css<any>`
    ${pulse} ${'1s forwards;'}
  `
export const PulseEffect = styled(Text)<any>`
:hover, :focus {
  animation: ${props => props.enablePulseEffect ? animation : ''};
  box-shadow: ${props => props.enablePulseEffect ? '0 0 0 2em transparent' : ''};
}
`;
