import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

// export default function FullWidthTabs() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
//       <AppBar position='static'>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor='secondary'
//           textColor='inherit'
//           variant='fullWidth'
//           aria-label='full width tabs example'
//         >
//           <Tab label='モンスタ-' {...a11yProps(0)} />
//           <Tab label='スーパー' {...a11yProps(1)} />
//           <Tab label='ハイパー' {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0} dir={theme.direction}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1} dir={theme.direction}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2} dir={theme.direction}>
//         Item Three
//       </TabPanel>
//     </Box>
//   );
// }
