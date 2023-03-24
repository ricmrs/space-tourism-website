import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";

interface ImageProps {
  srcset?: { xs: string, sm?: string , md?: string, lg?: string, xl?: string }
  alt: string;
  styleSheet?: StyleSheet; 
}
export default function Image({ alt, srcset, styleSheet, ...props }: ImageProps) {
  return (
    <BaseComponent
      as='picture'
      styleSheet={{...styleSheet}}
    >
      <BaseComponent as="source" srcSet={srcset?.xl} media="(min-width: 1200px)"/>
      <BaseComponent as="source" srcSet={srcset?.lg} media="(min-width: 992px)"/>
      <BaseComponent as="source" srcSet={srcset?.md} media="(min-width: 768px)"/>
      <BaseComponent as="source" srcSet={srcset?.sm} media="(min-width: 480px)"/>
      <BaseComponent 
        as="img"
        src={srcset?.xs}
        alt={alt}
        styleSheet={{...styleSheet}}
        {...props}
      />
    </BaseComponent>
  )
}
