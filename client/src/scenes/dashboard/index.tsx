import { Box, useMediaQuery } from '@mui/material';

type Props = {};

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`;

const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"

`;

const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px)');

  return (
    <Box
      width='100%'
      height='100%'
      display='grid'
      gap='1.5rem'
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
              gridTemplateRows: 'repeat(10, minmax(60px, 1 fr))',
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Box bgcolor='#abb8c3' gridArea='a'></Box>
      <Box bgcolor='#abb8c3' gridArea='b'></Box>
      <Box bgcolor='#abb8c3' gridArea='c'></Box>
      <Box bgcolor='#abb8c3' gridArea='d'></Box>
      <Box bgcolor='#abb8c3' gridArea='e'></Box>
      <Box bgcolor='#abb8c3' gridArea='f'></Box>
      <Box bgcolor='#abb8c3' gridArea='g'></Box>
      <Box bgcolor='#abb8c3' gridArea='h'></Box>
      <Box bgcolor='#abb8c3' gridArea='i'></Box>
      <Box bgcolor='#abb8c3' gridArea='j'></Box>
    </Box>
  );
};

export default Dashboard;
