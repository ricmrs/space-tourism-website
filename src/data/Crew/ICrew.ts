export interface IMember {
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
  role: string;
  description: string;
}

export type ICrew = IMember[]
