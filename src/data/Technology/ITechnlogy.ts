import { StyleSheet } from "@/theme/StyleSheet";

export interface ITechnology {
  id: number;
  name: string;
  image: {
    srcset:  {
      xs: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    }
    alt: string;
  };
  description: string;
}
