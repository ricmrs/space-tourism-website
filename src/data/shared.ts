export interface BaseInfo {
  id: number;
  name: string;
  description: string;
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
}
