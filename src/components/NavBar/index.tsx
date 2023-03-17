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
      height: '96px',
      alignItems: 'center',
      hover: {
        borderBottom: '3px solid #979797',
      },
      focus: {
        borderBottom: '3px solid #FFFFFF',
      }
    }
  }
  const numberStyles = {
    styleSheet: {
      fontWeight: '700',
      display: { xs: 'none', lg: 'flex' }
    }
  }
  return (
    <Box tag="nav" styleSheet={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      position: 'absolute',
      paddingTop: { xs: '24px', lg: '40px' },
      paddingLeft: { xs: '24px', md: '39px', lg: '55px' },
      paddingRight: { xs: '24px' }
    }}>
      <Icon name="space" />
      <Button onClick={() => setShowModal(true)} styleSheet={{ display: { xs: 'flex', sm: 'none' }}}>
        <Icon name="menu" styleSheet={{ color: theme.colors.secondary }} viewBox={16} />
      </Button>
      {showModal && <Modal title="modal" onClose={() => setShowModal(false)}>Hello!</Modal>}
      <Box styleSheet={{
        width: { xs: '20vw', lg: '22vw', xl: '32vw' },
        borderBottom: '1px solid #FFFFFF',
        opacity: '0.25',
        position: 'relative',
        left: '5%',
        zIndex: 1,
        display: { xs: 'none', lg: 'flex', xl: 'flex' }
      }} />
      <Box styleSheet={{
        flexDirection: 'row',
        paddingHorizontal: { xs: '46px', lg: '100px', xl: '145px' },
        gap: { xs: '37px', lg: '48px' },
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(40.7742px)',
        display: { xs: 'none', sm: 'flex' }
      }}>
        <Link href="/" variant="navText" {...linkStyles}><Text variant="navText" {...numberStyles}>00</Text>Home</Link>
        <Link href="/destination" variant="navText" {...linkStyles}><Text variant="navText" {...numberStyles}>01</Text> Destination</Link>
        <Link href="/crew" variant="navText" {...linkStyles}><Text variant="navText" {...numberStyles}>02</Text> Crew</Link>
        <Link href="/tecnhology" variant="navText" {...linkStyles}><Text variant="navText" {...numberStyles}>03</Text> Tecnhology</Link>
      </Box>
    </Box>
  )
}
