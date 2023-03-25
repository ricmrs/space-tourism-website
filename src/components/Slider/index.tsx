import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { useTheme } from "@/theme/ThemeProvider";
import { MouseEvent } from "react";
import Text from "../Text";
import { createVariant } from "./sliderStyle";

export interface SliderProps {
  items: { name: string }[];
  currentItem: { name: string };
  type: 'null' | 'number';
  styleSheetSlider?: StyleSheet;
  styleSheetItem?: StyleSheet;
  children?: React.ReactNode;
  onClick: (e: MouseEvent) => void;
}

export default function Slider({
  items,
  currentItem,
  type,
  children,
  styleSheetSlider,
  styleSheetItem,
  onClick,
  ...props
}: SliderProps) {
  const theme= useTheme();
  return (
    <BaseComponent
      as="ul"
      styleSheet={{
        flexDirection: 'row',
        gap: '16px',
        ...styleSheetSlider
      }}
    >
      {items.map((item, index) => {
        const styleType = createVariant(theme, item, currentItem, type)
        return (
          <BaseComponent
            as="li"
            tabIndex="0"
            key={item.name}
            onClick={onClick}
            data={item.name}
            styleSheet={{
              borderRadius: '100%',
              cursor: 'pointer',
              backgroundColor: '#FFFFFF',
              ...styleType,
              ...styleSheetItem,
            }}
            {...props}
          >
            {type === 'number' ? 
              <Text
                variant="sliderText"
                styleSheet={{ color: 'inherit'}}
              >
                {index+1}
              </Text> : ''}
          </BaseComponent>
        )
      })}
    </BaseComponent>
  )
}

Slider.defaultProps  = {
  type: 'null'
}
