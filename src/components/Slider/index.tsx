import { BaseComponent } from "@/theme/BaseComponent";
import { MouseEvent } from "react";

interface SliderProps {
  items: { name: string }[];
  currentItem: { name: string };
  styleSheet?: StyleSheet;
  onClick: (e: MouseEvent) => void;
}

export default function Slider({ items, onClick, currentItem }: SliderProps){
  return (
    <BaseComponent
      as="ul"
      styleSheet={{
        flexDirection: 'row',
        gap: '16px'
      }}
    >
      {items.map(item => (
        <BaseComponent
          as="li"
          tabIndex="0" 
          key={item.name}
          onClick={onClick}
          data={item.name} 
          styleSheet={{
            borderRadius: '100%',
            width: { xs: '10px', lg: '15px' },
            height: { xs: '10px', lg: '15px' },
            hover: {
              opacity: '0.5'
            },
            focus: {
              opacity: `${currentItem.name === item.name ? '1' : '0.5'}`
            },
            cursor: 'pointer',
            backgroundColor: '#FFFFFF',
            opacity: `${currentItem.name === item.name ? '1' : '0.17'}`, 
          }}
        >
        </BaseComponent>
      ))}
    </BaseComponent>
  )
}
