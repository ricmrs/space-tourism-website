import React from 'react';
import NextLink from 'next/link';
import Text from "../Text";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";


interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'secondary' | 'tertiary';
  colorVariantEnabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Link = React.forwardRef(({
  href,
  children,
  colorVariant,
  styleSheet,
  colorVariantEnabled,
  onClick,
  ...props
}:LinkProps, ref) => {
  const theme = useTheme();
  const isIExternalLink = href.startsWith('http');
  const currentColorSet = {
    color: theme.colors[colorVariant!],
    hover: {
      color: theme.colors[colorVariant!],
    },
    focus: {
      color: theme.colors[colorVariant!],
    }
  };

  const linkProps = {
    tag: 'a',
    ref,
    children,
    href,
    onClick,
    styleSheet: {
      textDecoration: 'none',
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      ...styleSheet,
      hover: {
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      },
      focus: {
        ...styleSheet?.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      },
    },
    ...props
  }

  if(isIExternalLink) return (
    <Text 
      {...{
        target: '_blank',
        ...linkProps,
      }}
    />
  )

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Text {...linkProps} />
    </NextLink>
  )
});

Link.displayName = 'Link';

Link.defaultProps = {
  colorVariant: 'tertiary',
  colorVariantEnabled: true,
};

export default Link;
