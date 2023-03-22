export const typography = {
  fontFamily: "'Bellefair', serif",
  textTransform: 'uppercase',
  variants: {
    heading1: {
      fontSize: {
        xs: '80px',
        sm: '150px',
      },
    },
    heading2: {
      fontSize: {
        xs: '56px',
        sm: '80px',
        md: '100px',
      },
    },
    heading3: {
      fontSize: {
        xs: '24px',
        sm: '40px',
        md: '56px',
      },
    },
    heading4: {
      letterSpacing: {
        xs: '1.25px',
        sm: '2px'
      },
      fontSize: {
        xs: '20px',
        md: '32px',
      },
    },
    heading5: {
      letterSpacing: '4.72px',
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: {
        xs: '16px',
        sm: '20px',
        lg: '28px',
      },
    },
    subheading1: {
      fontSize: '28px',
    },
    subheading2: {
      letterSpacing: '2.35px',
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: '14px',
    },
    tabText: {
      fontFamily: "'Barlow Condensed', sans-serif",
      letterSpacing: {
        xs: '2.36px',
        sm: '2.7px'
      },
      lineHeight: {
        xs: '16.8px',
        sm: '19.2px'
      },
      fontSize: {
        xs: '14px',
        sm: '16px'
      }
    },
    navText: {
      letterSpacing: '2.7px',
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: {
        xs: '16px',
        sm: '14px',
        lg: '16px',
      },
    },
    body: {
      textTransform: 'normal',
      fontSize: {
        xs: '15px',
        sm: '16px',
        md: '18px',
      },
      lineHeight: {
        xs: '25px',
        sm: '28px',
        md: '32px'
      }
    },
  }
} as const;
