
import React, { Component } from 'react';

import { Button, Header, Grid, Menu, Segment,Table,Card,Label,Icon,} from 'semantic-ui-react'

import { Link } from "react-router-dom";

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      chatArr : []
    };
    this.displayChat = this.displayChat.bind(this);

  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  state = {}
    handleChange = (e, { value }) => this.setState({ value })
  //  state = {}
  //  handleItemClick = name => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    return (
      <div>
      <Header as='h1' style={styles.topheading}>THE AUSTRALIAN</Header>
      <Header as='h3' style={{marginLeft:'7%', color:'#00394d'}}>My News Account <span> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; </span> Manage my subscriptions</Header>

      <Grid>
      <Grid.Column width={1}></Grid.Column>

      <Grid.Column width={3}>
      <Menu vertical>
      <Menu.Item >
      <Menu.Header style={styles.menuheader}>My Subscriptions</Menu.Header>
      <Menu.Menu>
      <Menu.Item style={styles.submenu}
      name='MANAGE SUBSCRIPTIONS'
      active={activeItem === 'MANAGE SUBSCRIPTIONS'}
      onClick={this.handleItemClick}/>
      <Menu.Item style={styles.submenu}
      name='VIEW TAX INVOICES'
      active={activeItem === 'VIEW TAX INVOICES'}
      onClick={this.handleItemClick}/>
      <Menu.Item style={styles.submenu}
      name='REPORT MISSED DELIVERY'
      active={activeItem === 'REPORT MISSED DELIVERY'}
      onClick={this.handleItemClick}/>
      <Menu.Item style={styles.submenu}
      name='SUSPEND PAPER DELIVERY'
      active={activeItem === 'SUSPEND PAPER DELIVERY'}
      onClick={this.handleItemClick}/>
      <Menu.Item style={styles.submenu}
      name='MANAGE MY NEWSLETTERS'
      active={activeItem === 'MANAGE MY NEWSLETTERS'}
      onClick={this.handleItemClick}/>
      </Menu.Menu>
      </Menu.Item>

      <Menu.Item >
      <Menu.Header style={styles.menuheader}>My Details</Menu.Header>
      <Menu.Menu>
      <Menu.Item style={styles.submenu}
      name='UPDATE PERSONAL DETAILS'
      active={activeItem === 'UPDATE PERSONAL DETAILS'}
      onClick={this.handleItemClick}/>
      <Menu.Item style={styles.submenu}
      name='UPDATE PAYMENT DETAILS'
      active={activeItem === 'UPDATE PAYMENT DETAILS'}
      onClick={this.handleItemClick}/>
      <Menu.Item style={styles.submenu}
      name='UPDATE ADDRESS'
      active={activeItem === 'UPDATE ADDRESS'}
      onClick={this.handleItemClick}/>
      </Menu.Menu>
      </Menu.Item>

      <Menu.Item >
      <Menu.Header style={styles.menuheader}>Manage Accounts</Menu.Header>
      <Menu.Menu>
      <Menu.Item style={styles.submenu}
      name='CHANGE PASSOWRD'
      active={activeItem === 'CHANGE PASSOWRD'}
      onClick={this.handleItemClick}/>
      <Menu.Item style={styles.submenu}
      name='MANAGE SOCIAL ACCOUNTS'
      active={activeItem === 'MANAGE SOCIAL ACCOUNTS'}
      onClick={this.handleItemClick}/>
      </Menu.Menu>
      </Menu.Item>

      <Menu.Item >
      <Menu.Header style={styles.menuheader}>Customer Supports</Menu.Header>
      <Menu.Menu>
      <Menu.Item style={styles.submenu}
      name='CONTACT US'
      active={activeItem === 'CONTACT US'}
      onClick={this.handleItemClick}/>
      </Menu.Menu>
      </Menu.Item>
      </Menu>
      </Grid.Column>


      <Grid.Column stretched width={11}>
      <Table singleLine >
      <Table.Header>
      <Table.Row >
      <Table.HeaderCell>Status</Table.HeaderCell>
      <Table.HeaderCell>ID</Table.HeaderCell>
      <Table.HeaderCell>Subscription</Table.HeaderCell>
      <Table.HeaderCell>Start Date</Table.HeaderCell>
      <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
      </Table.Header>

      <Table.Body>
      <Table.Row>
      <Table.Cell>Active</Table.Cell>
      <Table.Cell>343432013</Table.Cell>
      <Table.Cell>The Australian Hot Offer Digital Subscription</Table.Cell>
      <Table.Cell>Feb 21,2019</Table.Cell>
      <Table.Cell><Button color='blue' >Manage</Button></Table.Cell>
      </Table.Row>
      </Table.Body>
      </Table>

      <Grid columns={3} >
      <Grid.Row>
      <Grid.Column>
      <Segment.Group >
      <Segment tertiary>VIEW PAST SUBSCRIPTION</Segment>
      <Segment><a>Access the transaction history of expired subscription</a></Segment>
      </Segment.Group>
      </Grid.Column>

      <Grid.Column>
      <Segment.Group>
      <Segment tertiary>UPDATE MY DETAILS</Segment>
      <Segment><a>Change my personal and login details</a></Segment>
      </Segment.Group>
      </Grid.Column>

      <Grid.Column>
      <Segment.Group>
      <Segment tertiary>TERMS AND CONDITIONS</Segment>
      <Segment><a> Read the terms and conditions of registration</a></Segment>
      </Segment.Group>
      </Grid.Column>
      </Grid.Row>
      </Grid>

      <Segment style={{ height:400 }}>
      <div>
      {this.state.chatArr.map((item, key)=>{
      //  console.log('Item: ', item);
        return this.displayChat(item,key)
      })}
      </div>
      </Segment>
      </Grid.Column>

      <Grid.Column width={1}></Grid.Column>
      </Grid>
      </div>

    );
  }

  componentDidMount(){

    var tempData = [
      'Hi, How can i Help you ?',
      'Report Missed Delivery',
      'I am sorry to hear this , let me know which of them did we miss',
      'which date we missed',
      'Thank you, your complaint has been registered, will get back to you soon.'
    ]
    // this.stateChange(this.state.chatArr);
    let timerId = setInterval(() => {
      var message = tempData.shift()
      console.log('tempdata length: ', tempData.length);
      var tempChatState = this.state.chatArr
      tempChatState.push(message)
      this.setState({chatArr: tempChatState},
        console.log(this.state.chatArr)
      )
      if(tempData.length === 0){
        clearInterval(timerId)
      }
    }, 5000);

  }


  displayChat(message, key){
    console.log('Message: ', message);
    var displayIcon;
    var datevalue;
    if(key === 1){
      displayIcon = true;
    }
    if(key === 3){
      datevalue = true;
    }
    return(
      <div>
        <Card raised style={{width:'100%', fontSize:15, marginBottom:10}}>
          <Card.Content>
            <Card.Description sytle={{width:'70%', }}>
              {message}
              {displayIcon ?
                <div style={{marginTop:10}}>
                  <Label centered><Icon name=' stop circle outline'/>Start Stop </Label>
                  <Label><Icon name=' bell'/>Change Plan </Label>
                  <Label><Icon name=' paper plane'/>Delayed Delivery </Label>
                  <Label><Icon name=' plus'/>Missed Delivery </Label>
                  <Label><Icon name=' pin'/>View Offers </Label>
                </div>
             : ''}

             {datevalue ?
               <div>
                <fieldset id="group1" style={styles.formset}>
                 <input type="radio" name="group1"/> Yesterday  <span> &nbsp; &nbsp; &nbsp; </span>
                 <input type="radio" name="group1"/> 2 days ago <span> &nbsp; &nbsp; &nbsp; </span>
                 <input type="radio" name="group1" /> 3 days ago  <span> &nbsp; &nbsp; &nbsp; </span>
                 <input type="Date" name="group1"/>others
                 </fieldset>
               </div>
                : ''}

            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }

}

const styles = {
  topheading:{
    display: 'flex', justifyContent:'center', alignItems:'center',letterSpacing: 2,fontSize:65,color:'#00394d'
  },
  menuheader:{fontSize:'1.4rem', color:'#00394d'},
  submenu:{ color:'#00394d',},
  formset:{  border: 0,},
}

export default LoginPage;
