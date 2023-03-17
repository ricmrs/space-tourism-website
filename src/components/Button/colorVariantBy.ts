import { Theme } from "@/theme/theme";

export type ColorVariant = 'primary' | 'secondary' | 'tertiary';
export type Variant = 'ghost' | 'contained' | 'outlined';

function createVariant(theme: Theme, colorVariant: ColorVariant) {
  return {
    contained: {
      backgroundColor: theme.colors[colorVariant],
      color: theme.colors.tertiary,
      hover: {
        backgroundColor: theme.colors[colorVariant],
      },
      focus: {
        backgroundColor: theme.colors[colorVariant],
      },
    },
    outlined: {
      border: '1px solid',
      backgroundColor: 'transparent',
      color: theme.colors[colorVariant],
      borderColor: theme.colors[colorVariant],
      hover: {
        backgroundColor: theme.colors[colorVariant],
      },
      focus: {
        backgroundColor: theme.colors[colorVariant],
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.colors[colorVariant],
      hover: {
        backgroundColor: theme.colors[colorVariant],
      },
      focus: {
        backgroundColor: theme.colors[colorVariant],
      },
    },
  };
}

export function colorVariantBy(theme: Theme, colorVariant: ColorVariant, variant: Variant) {
  const styles = {
    // [primary]
    primary: createVariant(theme, 'primary'),
    secondary: createVariant(theme, 'secondary'),
    tertiary: createVariant(theme, 'tertiary'),
  };

  return styles[colorVariant][variant];
}
