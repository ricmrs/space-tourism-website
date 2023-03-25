import { Theme } from "@/theme/theme";

type item = { name: string }
export type Variant = 'null' | 'number';

export function createVariant(theme: Theme, item: item, currentItem: item, type: Variant) {
  const isCurrentItem = currentItem.name === item.name;

  const variants = {
    null: {
      width: { xs: '10px', lg: '15px' },
      height: { xs: '10px', lg: '15px' },
      hover: {
        opacity: '0.5'
      },
      focus: {
        opacity:  '0.5'
      },
      opacity: `${isCurrentItem ? '1' : '0.17'}`
    },
    number: {
      width: { xs: '40px', sm: '60px', lg: '80px' },
      height: { xs: '40px', sm: '60px', lg: '80px' },
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #FFFFFF40',
      color: `${isCurrentItem ? theme.colors.primary : theme.colors.tertiary}`,
      backgroundColor: `${isCurrentItem ? '#FFF' : 'transparent'}`,
      hover: {
        border: '1px solid #FFFFFF',
        backgroundColor: 'transparent',
        color: theme.colors.tertiary,
      },
      focus: {
        border: '1px solid #FFFFFF',
        backgroundColor: 'transparent',
        color: theme.colors.tertiary,
      }
    },
  };

  return variants[type]
}
