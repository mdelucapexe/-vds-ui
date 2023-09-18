import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { AiOutlineMenu } from 'react-icons/ai';
import Typography from '@mui/material/Typography';
import { Container, styled, useMediaQuery, useTheme } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const StyledListItem = styled(ListItem)(() => ({
  minHeight: '47px',
}));

const StyledListItemText = styled(ListItemText)(() => ({
  fontWeight: 700,
  color: '#fff',
  fontFamily: 'Cairo'
}));

export const ApplicationLayout = (props: Props) => {

  // 500px

  const { window } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(500));

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <StyledListItem />
      <Divider />
      <List disablePadding>
        {['Home', 'AppBar', 'PageTitle'].map((text) => (
          <StyledListItem key={text} disablePadding>
            <ListItemButton onClick={() => { navigate(text); }}>
              <StyledListItemText primary={text} />
            </ListItemButton>
          </StyledListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  if (!matches) {
    return (
      <Box>Non Ancora!</Box>
    )
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          '.MuiPaper-root': {
            backgroundColor: 'var(--bg-color-primary)',
            color: '#fff'
          }
        }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >

        <AppBar
          position="fixed"
          sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor: '#005075' }}
        >
          <Toolbar variant="dense">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <AiOutlineMenu />
            </IconButton>
            <span style={{ paddingLeft: '16px', fontWeight: 700, color: '#fff', fontFamily: 'Cairo' }}>
              vapor-design-system
            </span>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 2, mt: 6, overflowY: 'auto', height: 'calc(100vh - 50px)' }}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
