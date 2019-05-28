import React, { Component } from 'react';

//importing semantic-ui elements
import { Menu, Dropdown, Button, Image, Label, Modal, Header, Icon } from 'semantic-ui-react'

import { Link } from "react-router-dom";



export default class HomePage extends Component {

  constructor(props){
    super(props);
    this.state={activeItem:'NewsConnect',nats:100,comp:'',modalOpen:false}
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount(){
    if(typeof(Storage) !== undefined)
    {
      if(localStorage.getItem("notifications"))
      {
        var points = parseInt(localStorage.getItem("notifications")) + this.state.nats;
        this.setState({nats:points},()=>{
          localStorage.removeItem("notifications");
          var comp = (
            <Label style={{postion:'absolute',marginLeft:-25,marginTop:7,height:25,width:30}}>
              1
            </Label>
          )
          this.setState({comp:comp});
        });
      }
    }
    else
      console.log('No it is not present');
  }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    return(
      <div>
      <Menu inverted color="blue" secondary size="massive">
      <Menu.Item disabled as={Link} to='/home'
          name='NewsConnect'
          active={this.state.activeItem === 'NewsConnec'}
          onClick={this.handleItemClick}>
          <span style={styles.title}>Engage</span>
        </Menu.Item>

        <Menu.Menu position='right'>

          <Menu.Item as={Link} to='/verify'>
            Verify
          </Menu.Item>

          <Menu.Item as={Link} to='/imageUpload'>
            Image
          </Menu.Item>

         <Menu.Item as={Link} to='/videoUpload'>
            Video
          </Menu.Item>

          <Menu.Item as={Link} to='/debates'>
            Debates
          </Menu.Item>



          <Dropdown item icon="bell" >
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>{this.setState({modalOpen:true})}}>You have earned 25 Nats</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {this.state.comp}



          <Dropdown item text='Andrew'>
            <Dropdown.Menu>
              <Dropdown.Item>My Account</Dropdown.Item>
              <Dropdown.Item as={Link} to='/'>SignOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>

          </Menu.Item>

        </Menu.Menu>
      </Menu>
      <Modal open={this.state.modalOpen}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Congrats you have earned 25 Nats</Header>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button as={Link} to='/redeem' color='green' inverted>
            <Icon name='currency' /> Redeem NATs
          </Button>
          <Button color='red' onClick={()=>this.setState({modalOpen:false,comp:''})} inverted>
            <Icon name='close' />Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
    );
  }
}


const styles = {
  title:{
    color:'white',
    fontSize:25,
    letterSpacing:'5px',
    cursor:'pointer',
    marginLeft: 25
  },
  image:{
    height:35,
    width:35,
  },
  menuItem:{
    marginRight:'-20px'
  }
}
