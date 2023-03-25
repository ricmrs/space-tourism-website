import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";

interface TabsProps {
  items: { name: string }[];
  currentItem: { name: string };
  variant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick: (e: React.KeyboardEvent<HTMLButtonElement> & React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Tabs({ items, currentItem, onClick, styleSheet, variant, ...props }: TabsProps) {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant!];
  return (
    <BaseComponent 
      as="ul"
      styleSheet={{
        listStyle: 'none',
        flexDirection: 'row',
        ...textVariant,
        ...styleSheet
      }}
      {...props}
    >
      {items.map(item => (
        <BaseComponent
          as="li"
          tabIndex="0" 
          key={item.name} 
          onClick={onClick}
          onKeyDown={onClick}
          styleSheet={{
            hover: {
              borderBottom: '3px solid #979797',
            },
            focus: {
              borderBottom: '3px solid #979797',
            },
            borderBottom: `${currentItem.name === item.name ? '3px solid #FFFFFF' : ''}` 
          }}
        >
          {item.name}
        </BaseComponent>
      ))}
    </BaseComponent>
  )
}
