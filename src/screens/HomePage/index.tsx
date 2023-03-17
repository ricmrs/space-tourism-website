import Box from "@/components/Box";
import Button from "@/components/Button";
import Text from "@/components/Text";

export default function HomePage() {
  return (
    <Box tag="main" styleSheet={{
      backgroundImage: {
        xs: "url('assets/home/background-home-mobile.jpg')",
        md: "url('assets/home/background-home-tablet.jpg')",
        lg: "url('assets/home/background-home-desktop.jpg')"
      },
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      flexDirection: { lg: 'row' }
    }}>
      <Box styleSheet={{
        width: { xs: '325px', sm: '450px'},
        textAlign: 'center',
        marginBottom: { xs: '81px', sm: '156px',  lg: '131px'},
        marginLeft: { xs: 'auto', lg: '165px'},
        marginRight: { xs: 'auto' },
        marginTop: { xs: '112px', sm: '202px', lg: '350px'},
      }}>
        <Text variant="heading5" colorVariant="secondary">So, you want to travel to</Text>
        <Text variant="heading1">Space</Text>
        <Text variant="body" colorVariant="secondary" styleSheet={{ textAlign: { xs: 'center', md: 'justify'} }}>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </Text>
      </Box>
      <Button
        type="rounded" 
        colorVariant="tertiary"
        enablePulseEffect={true}
        styleSheet={{ 
          marginTop: { xs: '0px', lg: '380px' }, 
          marginRight: { xs: 'auto', lg: '165px'}, 
          marginLeft: { xs: 'auto', lg: '10vw', xl: '20vw' },
          marginBottom: { xs: '48px', sm: '90px', lg: '0px' }
        }}
      >
        <Text colorVariant="primary" variant="heading4">Explore</Text>
      </Button>
    </Box>
  )
}
