import Box from "@/components/Box";
import Image from "@/components/Image";
import Tabs from "@/components/Tabs";
import Text from "@/components/Text";
import { ICrew, IMember } from "@/data/Crew/ICrew";
import { useTheme } from "@/theme/ThemeProvider";

import { MouseEvent, useState } from "react";

export default function CrewPage({ crew }: { crew: ICrew }) {
  const theme = useTheme();
  const [member, setMember] = useState<IMember>(crew[0]);

  const handleClick = (e: MouseEvent<Element, globalThis.MouseEvent>) => {
    const eventTargetName = e.currentTarget.textContent;
    const currentMember = crew.find(member => member.name === eventTargetName)
    setMember(currentMember!)
  }

  return (
    <Box tag="main" styleSheet={{
      backgroundImage: {
        xs: "url('assets/crew/background-crew-mobile.jpg')",
        sm: "url('assets/crew/background-crew-tablet.jpg')",
        lg: "url('assets/crew/background-crew-desktop.jpg')"
      },
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      minHeight: '100%',
      alignItems: 'center',
      paddingTop: { xs: '88px', sm: '136px', md: '180px', lg: '212px' }
    }}>
      <Box
        styleSheet={{
          marginBottom: { xs: '32px', sm: '60px', lg: '64px' },
          alignSelf: { xs: 'center', sm: 'flex-start', lg: 'flex-start' },
          marginLeft: { xs: '0px', sm: '38px', lg: '167px' }
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
            02
          </Text>
          Meet your crew
        </Text>
      </Box>
      <Box
        styleSheet={{
          alignItems: 'center',
          flexDirection: { lg: 'row' },
          gap: { lg: '5vw', xl: '15vw' }
        }}>
        <Box 
          styleSheet={{
            width: '90%',
            alignItems: 'center',
            borderBottom: '1px solid #979797'
          }}>
          <Image
            src={member.image.src}
            alt={member.image.alt}
            styleSheet={{
              height: { xs: '222px', sm: '300px', lg: '445px' },
              // width: { xs: '170px', sm: '300px', lg: '445px' },
            }}
          />
        </Box>
        <Box styleSheet={{
          alignItems: { xs: 'center', lg: 'flex-start' },
        }}>
          <Tabs
            items={crew}
            currentItem={member}
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
          <Text variant="heading5" styleSheet={{ opacity: '0.5' }}>{member.role}</Text>
          <Text variant="heading3">{member.name}</Text>
          <Text
            variant="body"
            colorVariant="secondary"
            styleSheet={{
              width: { xs: '327px', sm: '80%', lg: '445px' },
              height: { xs: '125px', sm: '125px', lg: '182px' },
              textAlign: { xs: 'center', sm: 'center', lg: 'left' },
              marginBottom: '32px',
              borderBottom: '1px solid #383B4B',
            }}>
            {member.description}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
