import { IDestination } from "./IDestination";

export const destinations: IDestination[] = [
  {
    id: 1,
    name: 'Moon',
    image: {
      srcset: { xs: 'assets/destination/image-moon.png' },
      alt: 'Moon'
    },
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    avgDistance: '384,400 km',
    travelTime: '3 days'
  },
  {
    id: 2,
    name: 'Mars',
    image: {
      srcset: { xs: 'assets/destination/image-mars.png' },
      alt: 'Mars'
    },
    description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    avgDistance: '225 Mil. km',
    travelTime: '9 months'
  },
  {
    id: 3,
    name: 'Europa',
    image: {
      srcset: { xs: 'assets/destination/image-europa.png' },
      alt: 'Europa'
    },
    description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    avgDistance: '628 Mil. km',
    travelTime: '3 years'
  },
  {
    id: 4,
    name: 'Titan',
    image: {
      srcset: { xs: 'assets/destination/image-titan.png' },
      alt: 'Titan'
    },
    description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    avgDistance: '1.6 Bil. km',
    travelTime: '7 years'
  }
]
