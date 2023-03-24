import Box from "@/components/Box";
import Image from "@/components/Image";
import Slider from "@/components/Slider";
import Text from "@/components/Text";
import { ITechnology } from "@/data/Technology/ITechnlogy";
import { useState } from "react";

export default function TechnologyPage({ technologys }: { technologys: ITechnology[] }) {
  const [technology, setTechnology] = useState<ITechnology>(technologys[0]);

  return (
    <Box tag="main" styleSheet={{
      backgroundImage: {
        xs: "url('assets/technology/background-technology-mobile.jpg')",
        sm: "url('assets/technology/background-technology-tablet.jpg')",
        md: "url('assets/technology/background-technology-tablet.jpg')",
        lg: "url('assets/technology/background-technology-desktop.jpg')"
      },
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      minHeight: '100%',
      alignItems: 'center',
      paddingTop: { xs: '88px', sm: '136px', md: '180px', lg: '212px' },
      justifyContent: { xs: 'flex-start', sm: 'flex-start', md: 'space-between', lg: 'space-between' },
    }}>
      <Box
        styleSheet={{
          marginBottom: { xs: '32px', sm: '60px', lg: '64px', xl: '0px' },
          alignSelf: { xs: 'center', sm: 'flex-start', lg: 'flex-start', xl: 'flex-start' },
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
            03
          </Text>
          Space launch 101
        </Text>
      </Box>
      <Box
        styleSheet={{
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'column-reverse', lg: 'row-reverse',xl: 'row-reverse' },
          gap: { xs: '32px', sm: '32px', lg: '0px', xl: '0px' },
          minWidth: { xs: '100%', sm: 'auto', lg: 'auto', xl: '1114px'},
          justifyContent: { xs: 'normal', sm: 'normal', lg: 'normal', xl: 'space-between'}
        }}>
        <Box
          styleSheet={{
            alignItems: 'center',
            width: { xs: '100%', sm: '90%', lg: 'auto' },
          }}>
          <Image
            srcset={technology.image.srcset}
            alt={technology.image.alt}
            styleSheet={{
              height: { xs: '170px', sm: '402px', md: '572px', lg: '572px' },
              width: { xs: '100%', sm: 'auto', md: 'auto', lg: '500px' }
            }}
          />
        </Box>
        <Box
          tag="section"
          styleSheet={{
            gap: '32px',
            alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'flex-start', xl: 'flex-start' },
            width: { xs: 'auto', sm: '458px', md: '620px', lg: '458px', xl: '620px' },
            flexDirection: { xs: 'column', sm: 'column-reverse', md: 'column-reverse', lg: 'column-reverse', xl: 'column-reverse' },
          }}>
          {/* <Slider items={crew} currentItem={member} onClick={handleClick} /> */}
          <Box styleSheet={{
            gap: '8px',
            alignItems: { xs: 'center', lg: 'flex-start' },
            minHeight: { xs: 'auto', lg: '375px'}
          }}>
            <Text variant="tabText" colorVariant="secondary" styleSheet={{ opacity: '0.5' }}>The technology...</Text>
            <Text variant="heading3" styleSheet={{ marginBottom: '8px' }}>{technology.name}</Text>
            <Text
              variant="body"
              colorVariant="secondary"
              styleSheet={{
                width: { xs: '327px', sm: '80%', lg: '445px' },
                height: { xs: '100px', sm: '125px', lg: '182px' },
                textAlign: { xs: 'center', sm: 'center', lg: 'left' },
              }}>
              {technology.description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
