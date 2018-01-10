import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});
    
    render() {
        return (
            <div>
                <AppBar
                    title="Digital Farmer"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    <MenuItem onClick={this.handleClose} href="/" >Home</MenuItem>
                    <MenuItem onClick={this.handleClose} href="/prices" >Commodity Prices</MenuItem>
                </Drawer>
            </div>
    );
  }
}

export default Menu;
