import React, { Component } from 'react';
//import { BrowserRouter as Router, Route} from 'react-router';
import TopBar from '../../Components/TopBar/TopBar';
import CountryCards from '../CountryCards/CountryCards';
import ResortCards from '../ResortCards/ResortCards';
import ModalWindow from '../ModalWindow/ModalWindow';
import SignupForm from '../../Components/SignupForm/SignupForm';
import LoginForm from '../../Components/LoginForm/LoginForm';
import ResortPage from '../ResortPage/ResortPage';
import SignOutForm from '../../Components/SignOutForm/SignOutForm';
import './App.css';

import MessageBox from '../../Components/MessageBox/MessageBox';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      route:'Home',
      modal:'',
      fadeIn: true,
      countrySelection:'',
      resortSelection:'',
      loggedIn:false,
      user:{
        email:'',
        username:'',
        user_id:''
      },
      resort:{
        resort_id:'',
        resort_name:'',
      },
      messageBox:{
        status: false,
        message:'',
        colour:''
      }
    }

    this.changeSelection = this.changeSelection.bind(this);
    this.logInUser = this.logInUser.bind(this);
    this.signOutUser = this.signOutUser.bind(this);
  }

  changeRoute = (newRoute) => {
    if(newRoute === 'Home'){
      this.setState({
        route: newRoute,
        countrySelection: '',
        resortSelection:''
      })
    }else{
      this.setState({
        route: newRoute
      })
    }
  }

  setMessageBox = (status, message, colour) =>{
    this.setState({
      messageBox:{
        status: status,
        message: message,
        colour: colour
      }
    })
  }

  logInUser=(data)=>{
    this.setState({loggedIn: true})
    this.setState({user:{
      email: data.email,
      username: data.username,
      user_id: data.user_id
    }})
  }

  signOutUser(){
    this.setState({loggedIn: false})
    this.setState({modal:''})
    this.setState({user:{
      email:'',
      username:'',
      user_id:''
    }})
  }

  changeModal = (newModal) => {
    this.setState({
      modal: newModal
    })
  }

  changeSelection(e){
    this.state.countrySelection === '' ?
      this.setState({ countrySelection: e.target.id })
    :
      this.setState({resortSelection: e.target.id})
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({ fadeIn: !this.state.fadeIn })
    }, 100);
    // Trigger message box
    setTimeout(()=>{
      this.setState({
        messageBox: {
          status: 'active',
          message:'test',
          colour:'green'
        }
      })
    }, 3000)
  }

  render() {
    let fadeIn ='';
    if(this.state.fadeIn){
      fadeIn = 'faded'
    }else{
      fadeIn = 'faded in'
    }

    return (
      <div className="App">

        <MessageBox 
          setMessageBox={this.setMessageBox} 
          status={this.state.messageBox.status} 
          message={this.state.messageBox.message} 
          colour={this.state.messageBox.colour}
        />
        
        <div className={fadeIn}>
          <TopBar 
            changeModal={this.changeModal} 
            changeRoute={this.changeRoute} 
            loggedIn={this.state.loggedIn} 
            logOutUser={this.logInUser}
          />
          
          {
            this.state.countrySelection === '' ?
            <CountryCards changeSelection={this.changeSelection} />
          : 
            this.state.resortSelection === '' ?
            <ResortCards 
              countrySelection={this.state.countrySelection} 
              changeSelection={this.changeSelection}
            />
          : 
            <ResortPage 
              resortSelection={this.state.resortSelection} 
              userData={this.state.user}
            />
          }
        </div>

        {this.state.modal === 'Signup' &&
          <ModalWindow changeModal={this.changeModal}>
            <SignupForm 
              changeModal={this.changeModal} 
              logInUser={this.logInUser}
            />
          </ModalWindow>
        }
        {this.state.modal === 'Login' &&
          <ModalWindow changeModal={this.changeModal}>
            <LoginForm 
              changeModal={this.changeModal} 
              logInUser={this.logInUser}
            />
          </ModalWindow>
        }
        {this.state.modal === 'Sign Out' &&
          <ModalWindow changeModal={this.changeModal}>
            <SignOutForm 
              changeModal={this.changeModal} 
              signOutUser={this.signOutUser}
            />
          </ModalWindow>
        }
      </div>
    );
  }
}

export default App;
