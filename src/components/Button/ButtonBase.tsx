import React from "react";
import styled from 'styled-components';
import { ThemeTypographyVariants } from "@/theme/theme";
import { StyleSheet } from "@/theme/StyleSheet";
import { useRouter } from "next/router";
import { PulseEffect } from "./pulseEffect";

// [Composição Atual]
// Button: tag
// Text: tag
// BaseComponent: tag
// StyledComponent

const StyledButton = styled(PulseEffect)<any>``;

export interface ButtonBaseProps {
  href?: string;
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  enablePulseEffect?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  children,
  textVariant,
  styleSheet,
  href,
  enablePulseEffect,
  ...props
}: ButtonBaseProps) {
  const router = useRouter();
  const ref = React.useRef();
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';

  return (
    <StyledButton
      ref={ref}
      tag={Tag}
      href={href}
      enablePulseEffect={enablePulseEffect}
      styleSheet={{
        border: '0',
        backgroundColor: 'transparent',
        color: 'inherit',
        outline: '0',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: '0.25s',
        ...styleSheet
      }}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        isLink && event.preventDefault();
        isLink && router.push(href!);
        !isLink && props.onClick && props.onClick(event);
      }}
    >
      {children}
    </StyledButton>
  );
}

ButtonBase.defaultProps = {
  enabledPulseEffect: false,
}
