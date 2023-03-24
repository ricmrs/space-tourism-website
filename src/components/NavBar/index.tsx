import { StyleSheet } from "@/theme/StyleSheet";
import { useTheme } from "@/theme/ThemeProvider";
import { useState } from "react";
import Box from "../Box";
import Button from "../Button";
import Icon from "../Icon";
import Link from "../Link";
import Modal from "../Modal";
import Text from "../Text";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();

  const linkStyles = {
    styleSheet: {
      flexDirection: 'row',
      gap: '10px',
      height: { sm: '70px', md: '96px'},
      alignItems: 'center',
      hover: {
        borderBottom: '3px solid #979797',
      },
      focus: {
        borderBottom: '3px solid #FFFFFF',
      }
    }
  }

  const linkModalStyles = {
    styleSheet: {
      flexDirection: 'row',
      columnGap: '11px',
      alignItems: 'center',
    }
  }

  const numberStyles = {
    styleSheet: {
      fontWeight: '700',
      display: { xs: 'none', lg: 'flex' }
    }
  }

  const numberModalStyles = {
    styleSheet: {
      fontWeight: '700',
    }
  }


  return (
    <Box tag="nav" styleSheet={{
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      position: 'absolute',
      justifyContent: 'space-between',
      paddingTop: { xs: '24px', sm: '0px', md: '40px', lg: '40px' },
      paddingLeft: { xs: '24px', sm: '24px', md: '39px', lg: '55px' },
      paddingRight: { xs: '24px', sm: '0px', md: '0px', lg: '0px' }
    }}>
      <Icon name="space" />
      <Button 
        onClick={() => setShowModal(true)}
        styleSheet={{ 
          display: { xs: 'flex', sm: 'none' }, 
          backgroundColor: 'transparent',
          hover: {
            backgroundColor: 'transparent'
          }
        }}>
        <Icon name="menu" styleSheet={{ color: theme.colors.secondary }} viewBox={16} />
      </Button>
      {showModal && <Modal onClose={() => setShowModal(false)}><Links linkStyles={linkModalStyles} numberStyles={numberModalStyles}/></Modal>}
      <Box styleSheet={{
        borderBottom: '1px solid #FFFFFF',
        opacity: '0.25',
        position: 'relative',
        left: '5%',
        zIndex: 1,
        flexGrow: 1,
        display: { xs: 'none', lg: 'flex', xl: 'flex' }
      }} />
      <Box styleSheet={{
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(40.7742px)',
        paddingHorizontal: { xs: '20px', sm: '20px', md: '46px', lg: '100px', xl: '160px' },
        gap: { xs: '25px', sm: '25px', md: '37px', lg: '45px', xl: '45px' },
        display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' },
        justifyItem: 'flex-end'
      }}>
        <Links linkStyles={linkStyles} numberStyles={numberStyles}/>
      </Box>
    </Box>
  )
}

const Links = ({ linkStyles, numberStyles }: StyleSheet) => {
    return (
    <>
      <Link href="/" variant="navText" {...linkStyles}><Text variant="navText" {...numberStyles}>00</Text>Home</Link>
      <Link href="/destination" variant="navText" {...linkStyles}><Text variant="navText" {...numberStyles}>01</Text> Destination</Link>
      <Link href="/crew" variant="navText" {...linkStyles}><Text variant="navText" {...numberStyles}>02</Text> Crew</Link>
      <Link href="/technology" variant="navText" {...linkStyles}><Text variant="navText" {...numberStyles}>03</Text> Technology</Link>
    </>
  )
}
