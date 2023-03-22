import Box from "@/components/Box";
import Image from "@/components/Image";
import Text from "@/components/Text";
import Tabs from "@/components/Tabs";
import { IDestination } from "@/data/Destination/IDestination";
import { MouseEvent, useState } from "react";
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
        sm: "url('assets/destination/background-destination-tablet.jpg')",
        lg: "url('assets/destination/background-destination-desktop.jpg')"
      },
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      minHeight: '100%',
      alignItems: 'center',
      paddingTop: { xs: '88px', sm: '136px' }
    }}>
      <Box
        styleSheet={{
          marginBottom: { xs: '32px', sm: '60px' },
          alignSelf: { xs: 'center', sm: 'flex-start' },
          marginLeft: { xs: '0px', sm: '38px' }
        }}>
        <Text
          variant="heading5"
          styleSheet={{
            flexDirection: 'row',
            gap: '18px',
          }}>
          <Text
            tag="strong"
            variant="heading5"
            styleSheet={{
              fontWeight: '700',
              opacity: '0.25'
            }}>
            01
          </Text>
          Pick your destination
        </Text>
      </Box>
      <Image
        src={destination?.image.src!}
        alt={destination?.image.alt!}
        styleSheet={{
          height: { xs: '170px', sm: '300px' },
          width: { xs: '170px', sm: '300px' },
          marginBottom: { xs: '26px', sm: '53px' }
        }}
      />
      <Tabs
        items={destinations}
        currentItem={destination}
        onClick={handleClick}
        variant="tabText"
        styleSheet={{
          color: theme.colors.secondary,
          gap: '27px',
          textTransform: 'uppercase',
          height: { xs: '28px', sm: '34px' },
          marginBottom: { xs: '20px', sm: '32px' },
        }}
      />
      <Text variant="heading2">{destination?.name}</Text>
      <Text
        variant="body"
        colorVariant="secondary"
        styleSheet={{
          width: { xs: '327px', sm: '80%' },
          height: '125px',
          textAlign: 'center',
          marginBottom: '32px',
          borderBottom: '1px solid #383B4B',
        }}>
        {destination.description}
      </Text>
      <Box
        styleSheet={{
          alignItems: 'center',
          marginBottom: '32px',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: '32px', sm: '20vw' },
        }}>
        <Box
          styleSheet={{
            alignItems: 'center',
            gap: '12px',
          }}>
          <Text variant="subheading2" colorVariant="secondary">Avg. Distance</Text>
          <Text variant="subheading1">{destination.avgDistance}</Text>
        </Box>
        <Box
          styleSheet={{
            alignItems: 'center',
            gap: '12px'
          }}>
          <Text variant="subheading2" colorVariant="secondary">Est. Travel Time</Text>
          <Text variant="subheading1">{destination.travelTime}</Text>
        </Box>
      </Box>
    </Box>
  )
}

