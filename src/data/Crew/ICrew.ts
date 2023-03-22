export interface IMember {
  id: number;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  role: string;
  description: string;
}

export type ICrew = IMember[]
