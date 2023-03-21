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
      minHeight: '100%',
      flexDirection: { lg: 'row' },
      alignItems: 'center',
      paddingBottom: { xs: '81px' },
      paddingLeft: { xs: '24px', lg: '165px' },
      paddingRight: { xs: '24px' },
      paddingTop: { xs: '112px', sm: '202px', lg: '387px' },
      gap: { xs: '80px', lg: '12vw', xl: '20vw' }
    }}>
      <Box styleSheet={{
        width: { xs: '325px', sm: '450px'},
        textAlign: 'center',
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
          alignSelf: 'center' 
        }}
      >
        <Text colorVariant="primary" variant="heading4">Explore</Text>
      </Button>
    </Box>
  )
}
