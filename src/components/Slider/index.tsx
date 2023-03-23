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
        flexDirection: 'row'
      }}
    >
      {items.map(item => (
        <BaseComponent
          as="li" 
          key={item.name}
          onClick={onClick}
          data={item.name} 
          styleSheet={{
            borderRadius: '100%',
            width: '10px',
            height: '10px',
            hover: {
              backgroundColor: '#979797',
            },
            focus: {
              backgroundColor: '#FFFFFF',
            },
            backgroundColor: `${currentItem.name === item.name ? '#FFFFFF' : '#979797'}` 
          }}
        >
        </BaseComponent>
      ))}
    </BaseComponent>
  )
}
