import Box from "@/components/Box";
import Image from "@/components/Image";
import Slider from "@/components/Slider";
import Text from "@/components/Text";
import { ICrew, IMember } from "@/data/Crew/ICrew";
import Head from "next/head";

import { useState } from "react";

export default function CrewPage({ crew }: { crew: ICrew }) {
  const [member, setMember] = useState<IMember>(crew[0]);

  const handleClick = (e: React.KeyboardEvent<HTMLButtonElement> & React.MouseEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const eventTargetName = e.currentTarget.attributes.getNamedItem('data')?.value;
      const currentMember = crew.find(member => member.name === eventTargetName)
      setMember(currentMember!)
    }
  }

  return (
    <>
      <Head><title>Space Tourism - Crew</title></Head>
      <Box tag="main" styleSheet={{
        backgroundImage: {
          xs: "url('assets/crew/background-crew-mobile.jpg')",
          sm: "url('assets/crew/background-crew-tablet.jpg')",
          md: "url('assets/crew/background-crew-tablet.jpg')",
          lg: "url('assets/crew/background-crew-desktop.jpg')"
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
            tag="h1"
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
          tag="section"
          styleSheet={{
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'column-reverse', lg: 'row-reverse', xl: 'row-reverse' },
            gap: { xs: '32px', sm: '32px', lg: '0px', xl: '0px' },
            minWidth: { xs: 'auto', sm: 'auto', lg: 'auto', xl: '1114px' },
            justifyContent: { xs: 'normal', sm: 'normal', lg: 'normal', xl: 'space-between' }
          }}>
          <Box
            styleSheet={{
              alignItems: 'center',
              width: { xs: '90%', sm: '90%', lg: 'auto' },
              borderBottom: { xs: '1px solid #979797', sm: 'none', lg: 'none' }
            }}>
            <Image
              srcset={member.image.srcset}
              alt={member.image.alt}
              styleSheet={{
                height: { xs: '222px', sm: '402px', md: '572px', lg: '572px' },
                width: { xs: 'auto', sm: 'auto', md: 'auto', lg: '500px' }
              }}
            />
          </Box>
          <Box
            styleSheet={{
              gap: '32px',
              alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'flex-start', xl: 'flex-start' },
              width: { xs: 'auto', sm: '458px', md: '620px', lg: '458px', xl: '620px' },
              flexDirection: { xs: 'column', sm: 'column-reverse', md: 'column-reverse', lg: 'column-reverse', xl: 'column-reverse' },
            }}>
            <Slider items={crew} currentItem={member} onClick={handleClick} />
            <Box 
              tag="article"
              styleSheet={{
                gap: '8px',
                alignItems: { xs: 'center', lg: 'flex-start' },
                minHeight: { xs: 'auto', lg: '375px' }
              }}>
              <Text tag="h3" variant="heading4" styleSheet={{ opacity: '0.5' }}>{member.role}</Text>
              <Text tag="h2" variant="heading3" styleSheet={{ marginBottom: '8px' }}>{member.name}</Text>
              <Text
                variant="body"
                colorVariant="secondary"
                styleSheet={{
                  width: { xs: '327px', sm: '80%', lg: '445px' },
                  height: { xs: '100px', sm: '125px', lg: '182px' },
                  textAlign: { xs: 'center', sm: 'center', lg: 'left' },
                }}>
                {member.description}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
