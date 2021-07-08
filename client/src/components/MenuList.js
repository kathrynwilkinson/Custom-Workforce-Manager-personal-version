import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {
    Dashboard,
    People,
    AddBox,
    Notifications,
    Assessment,
    EventNote,
    AttachMoney,
    MeetingRoom
} from '@material-ui/icons';
import {
    Divider,
    Button,
    List
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';





export default function MenuList(props) {

    const handleLogout = async (event) => {
        event.preventDefault();
        console.log("route hit")
        await axios({
            method: "GET",

            withCredentials: true,
            url: '/auth/logout'
        }).then(res => props.setUser(null))

            .catch(err => console.log(err));
    };


    return (

        <div>
            <Divider />
            <List>
                <div>
                    <Link to='/dashboard'>
                        <ListItem >
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>

                    {/* <Link to='/createjob'> */}
                    {/* <ListItem >
                        <ListItemIcon>
                            <EventNote />
                        </ListItemIcon>
                        <ListItemText primary="Schedule" />
                    </ListItem>
                    {/* </Link> */}

                    {/* <ListItem >
                        <ListItemIcon>
                            <ChatBubbleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat" />
                    </ListItem>  */}
                </div>
            </List>
            <Divider />
            <List>
                <div>
                    <ListSubheader inset></ListSubheader>
                    {/* <Link to='' hidden={props.linkHidden}>
                        <ListItem  >
                            <ListItemIcon>
                                <Assessment />
                            </ListItemIcon>
                            <ListItemText primary="Reports" />
                        </ListItem>
                    </Link> */}
                    {/* <Link to='/form' hidden={props.linkHidden}>
                        <ListItem >
                            <ListItemIcon>
                                <AttachMoney />
                            </ListItemIcon>
                            <ListItemText primary="Invoices" />
                        </ListItem>
                    </Link> */}
                    <Link to='/crews' hidden={props.linkHidden}>
                        <ListItem >
                            <ListItemIcon>
                                <People />
                            </ListItemIcon>
                            <ListItemText primary="Crews" />
                        </ListItem>
                    </Link>
                    {/* <Link to=''>
                        <ListItem >
                            <ListItemIcon>
                                <LibraryBooksIcon />
                            </ListItemIcon>
                            <ListItemText primary="Jobs" />
                        </ListItem>
                    </Link> */}
                    <Link to='/createjob' hidden={props.linkHidden}>
                        <ListItem >
                            <ListItemIcon>
                                <AddBox />
                            </ListItemIcon>
                            <ListItemText primary="New Job" />
                        </ListItem>
                    </Link>

                    <Button id={"log-out"} onClick={handleLogout}>
                        <ListItem>
                            <ListItemIcon>
                                <MeetingRoom />
                            </ListItemIcon>
                            <ListItemText primary="Log Out" />
                        </ListItem>
                    </Button>

                </div>
            </List>
        </div>
    );
}
