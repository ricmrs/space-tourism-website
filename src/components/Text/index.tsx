import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";
import React from 'react';

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h2' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  ref: any;
  colorVariant?: 'primary' | 'secondary' | 'tertiary';
  colorVariantEnabled?: boolean;
}
const Text = React.forwardRef(({
  tag,
  styleSheet, 
  variant,
  colorVariant,
  colorVariantEnabled,
  ...props
}: TextProps, ref) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant!];

  const currentColorSet = {
    color: theme.colors[colorVariant!],
    hover: {
      color: theme.colors[colorVariant!],
    },
    focus: {
      color: theme.colors[colorVariant!],
    }
  };

  return (
    <BaseComponent
      as={tag}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        textTransform: theme.typography.textTransform,
        ...textVariant,
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
      }}
      {...props}
    />
  )
})

Text.displayName = 'Text';

Text.defaultProps = {
  tag: 'p',
  variant: 'body',
  colorVariant: 'tertiary',
  colorVariantEnabled: true
};

export default Text;
