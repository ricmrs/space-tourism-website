export interface IDestination {
  id: number;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  avgDistance: string;
  travelTime: string;
}
