import { navigation } from "@/data/NavBar";
import { INavigation } from "@/data/NavBar/INavigation";
import { StyleSheet } from "@/theme/StyleSheet";
import { useTheme } from "@/theme/ThemeProvider";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Box from "../Box";
import Button from "../Button";
import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";

const Modal = dynamic(() => import('../Modal'), {
  ssr: false,
});


export default function NavBar() {
  const theme = useTheme();
  const { pathname } = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [currentNavigation, setCurrentNavigation] = useState(navigation)

  useEffect(() => {
    const currentNav = navigation.reduce((allNavigations: INavigation[], navigation: INavigation) => {
      return [
          ...allNavigations, 
          {
            ...navigation, 
            active: navigation.href === pathname ? true : false
          }
        ]
    }, [])
    setCurrentNavigation(currentNav)
  }, [pathname])

  const linkStyles = {
    flexDirection: 'row',
    gap: '10px',
    height: { sm: '70px', md: '96px' },
    alignItems: 'center',
    hover: {
      borderBottom: '3px solid #979797',
    },
    focus: {
      borderBottom: '3px solid #979797',
    },
  }

  const linkModalStyles = {
    flexDirection: 'row',
    columnGap: '11px',
    alignItems: 'center',
  }

  const numberStyles = {
    fontWeight: '700',
    display: { xs: 'none', lg: 'flex' }
  }

  const numberModalStyles = {
    fontWeight: '700',
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
      <Button href="/" styleSheet={{ backgroundColor: 'transparent', alignSelf: 'center' }} aria-label="Space Tourism Logo"><Icon name="logo" /></Button>
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
      {showModal &&
        <Modal
          onClose={() => setShowModal(false)}
        >
          <Links
            linkStyles={linkModalStyles}
            numberStyles={numberModalStyles}
            navigation={navigation}
            onClick={() => setShowModal(false)}
          />
        </Modal>}
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
        <Links
          linkStyles={linkStyles}
          numberStyles={numberStyles}
          navigation={currentNavigation}
        />
      </Box>
    </Box>
  )
}

interface LinksProps {
  linkStyles: StyleSheet;
  numberStyles: StyleSheet;
  navigation?: INavigation[];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Links = ({ linkStyles, numberStyles, navigation, onClick }: LinksProps) => {
  return (
    <>
      {navigation!.map(link => (
        <Link
          key={link.id}
          href={link.href}
          variant="navText"
          onClick={onClick}
          styleSheet={{
            ...linkStyles,
            borderBottom: `${link.active ? '3px solid #FFF' : ''}`
          }}
        >
          <Text
            variant="navText"
            styleSheet={{...numberStyles}}
          >
            {link.number}
          </Text>
          {link.name}
        </Link>
      ))}
    </>
  )
}
