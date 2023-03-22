import Box from "@/components/Box";
import Image from "@/components/Image";
import Text from "@/components/Text";
import Tabs from "@/components/Tabs";
import { IDestination } from "@/data/Destination/IDestination";
import { MouseEvent, useEffect, useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";

export default function DestinationPage({ destinations }: { destinations: IDestination[] }) {
  const theme = useTheme();
  const [destination, setDestination] = useState<IDestination>(destinations[0]);

  const handleClick = (e: MouseEvent<Element, globalThis.MouseEvent>) => {
    const eventTargetName = e.currentTarget.textContent;
    const currentDestination = destinations.find(destination => destination.name === eventTargetName)
    setDestination(currentDestination!)
  }

  return (
    <Box tag="main" styleSheet={{
      backgroundImage: {
        xs: "url('assets/destination/background-destination-mobile.jpg')",
        md: "url('assets/destination/background-destination-tablet.jpg')",
        lg: "url('assets/destination/background-destination-desktop.jpg')"
      },
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      minHeight: '100%',
      alignItems: 'center',
      paddingTop: '88px'
    }}>
      <Box styleSheet={{ marginBottom: '32px' }}>
        <Text variant="heading5" styleSheet={{ flexDirection: 'row', gap: '18px' }}><Text tag="strong" variant="heading5" styleSheet={{ fontWeight: '700',  opacity: '0.25' }}>01</Text>Pick your destination</Text>
      </Box>
      <Image 
        src={destination?.image.src!} 
        alt={destination?.image.alt!} 
        styleSheet={{ 
          height: '170px', 
          width: '170px',
          marginBottom: '26px' 
        }}
      />
      <Tabs 
        items={destinations}
        currentItem={destination}
        onClick={handleClick}
        variant="subheading2"
        styleSheet={{ 
          color: theme.colors.secondary, 
          gap: '27px',
          height: '28px',
          marginBottom: '20px',
          textTransform: 'uppercase',
        }}
      />
      <Text variant="heading2">{destination?.name}</Text>
      <Text 
        variant="body" 
        colorVariant="secondary" 
        styleSheet={{ 
          width: '327px', 
          height: '125px', 
          textAlign: 'center',
          marginBottom: '32px',
          borderBottom: '1px solid #383B4B',
        }}>
        {destination.description}
      </Text>
      <Text variant="subheading2" colorVariant="secondary" styleSheet={{ marginBottom: '12px' }}>Avg. Distance</Text>
      <Text variant="subheading1" styleSheet={{ marginBottom: '32px' }}>{destination.avgDistance}</Text>
      <Text variant="subheading2" colorVariant="secondary" styleSheet={{ marginBottom: '12px' }}>Est. Travel Time</Text>
      <Text variant="subheading1">{destination.travelTime}</Text>
    </Box>
  )
}

