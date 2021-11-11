import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddProduct from '../../AddProduct/AddProduct';
import {

    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Button from '@restart/ui/esm/Button';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import Menu from '../../../Shared/Menu/Menu';

const drawerWidth = 240;

const DashBoard = (props) => {
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to={`${url}`}><Button>Dashboard</Button></Link>
            {admin && <Box>
                <Link to={`${url}/make-admin`}><Button>Make Admin</Button></Link>
                <Link to={`${url}/add-product`}><Button>Add Product</Button></Link></Box>}
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>

            <div>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            width: { sm: `calc(100% - ${drawerWidth}px)` },
                            ml: { sm: `${drawerWidth}px` },
                        }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                User Dashboard
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
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
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                        <Toolbar />
                        <Switch>
                            <Route exact path={path}>
                                <DashBoardHome></DashBoardHome>
                            </Route>
                            <AdminRoute path={`${path}/make-admin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/add-product`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                        </Switch>
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default DashBoard;