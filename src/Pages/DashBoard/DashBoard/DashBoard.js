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
import {

    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AllUsers from '../../AllUsers/AllUsers';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import AllOrders from '../AllOrders/AllOrders';

const drawerWidth = 240;

const DashBoard = (props) => {
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, handleSignOut, user } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <table className="table  table-striped">
                <tbody>
                    <tr>
                        <td><img
                            style={{
                                width: '30px',
                                borderRadius: '50%',
                                margin: '0px 5px'
                            }}
                            src={user.photoURL} alt="" /><span className="">{user.displayName}</span></td>
                    </tr>
                    <tr>
                        <td><Link className="text-decoration-none" to="/">Home</Link></td>
                    </tr>
                    <tr>
                        <td><Link className="text-decoration-none" to={`${url}`}>Dashboard</Link></td>
                    </tr>
                    {admin &&

                        <>
                            <tr>
                                <td><Link className="text-decoration-none" to={`${url}/manage-all-orders`}>Manage All Orders</Link></td>
                            </tr>
                            <tr>
                                <td><Link className="text-decoration-none" to={`${url}/make-admin`}>Make Admin</Link></td>
                            </tr>
                            <tr>
                                <td><Link className="text-decoration-none" to={`${url}/manage-all-product`}>Manage All Product</Link></td>
                            </tr>
                            <tr>
                                <td><Link className="text-decoration-none" to={`${url}/all-users`}>All Users</Link></td>
                            </tr>
                        </>}
                    <tr>
                        <td><Link to="" className="text-danger my-auto" onClick={handleSignOut} >SignOut</Link></td>
                    </tr>

                </tbody>
            </table>
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
                            <AdminRoute path={`${path}/manage-all-orders`}>
                                <AllOrders></AllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/make-admin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manage-all-product`}>
                                <ManageAllProducts></ManageAllProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/all-users`}>
                                <AllUsers></AllUsers>
                            </AdminRoute>
                        </Switch>
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default DashBoard;