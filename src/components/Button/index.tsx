import { useTheme } from "@/theme/ThemeProvider";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { buttonStyle } from "./buttonStyle";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  type?: 'rounded';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({
  styleSheet,
  children,
  fullWidth,
  colorVariant,
  variant,
  enablePulseEffect,
  type,
  onClick
}: ButtonProps) {
  const theme = useTheme();
  const buttonType = type ? buttonStyle[type] : {}
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        // [Color + Variant]
        ...colorVariantBy(theme, colorVariant!, variant!),
        // [Size]
        ...buttonType,
        // [FullWidth]
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet,
      }}
      enablePulseEffect={enablePulseEffect}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  size: 'md',
  variant: 'contained',
  colorVariant: 'primary',
}

Button.Base = ButtonBase;
