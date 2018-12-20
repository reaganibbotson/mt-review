import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as routingActions from '../../Actions/routing';
import * as modalActions from '../../Actions/modal';
//import { BrowserRouter as Router, Route} from 'react-router';

import TopBar from '../../Components/TopBar/TopBar';
import CountryCards from '../CountryCards/CountryCards';
import ResortCards from '../ResortCards/ResortCards';
import ModalWindow from '../ModalWindow/ModalWindow';
import SignupForm from '../../Components/SignupForm/SignupForm';
import LoginForm from '../../Components/LoginForm/LoginForm';
import ResortPage from '../ResortPage/ResortPage';
import SignOutForm from '../../Components/SignOutForm/SignOutForm';
import MessageBox from '../../Components/MessageBox/MessageBox';

import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      fadeIn: true,
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

    this.logInUser = this.logInUser.bind(this);
    this.signOutUser = this.signOutUser.bind(this);
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
    this.props.changeModal('');
    this.setState({user:{
      email:'',
      username:'',
      user_id:''
    }})
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({ fadeIn: !this.state.fadeIn })
    }, 100);
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
            changeModal={this.props.changeModal} 
            changeRoute={this.props.changeRoute} 
            loggedIn={this.state.loggedIn} 
            logOutUser={this.logInUser}
          />
          
          {
            this.props.countrySelection === '' ?
            <CountryCards changeSelection={this.props.changeCountry} />
          : 
            this.props.resortSelection === '' ?
            <ResortCards 
              countrySelection={this.props.countrySelection} 
              changeSelection={this.props.changeResort}
            />
          : 
            <ResortPage 
              resortSelection={this.props.resortSelection} 
              userData={this.state.user}
              setMessageBox={this.setMessageBox}
            />
          }
        </div>

        {this.props.modal === 'Signup' &&
          <ModalWindow changeModal={this.props.changeModal}>
            <SignupForm 
              changeModal={this.props.changeModal} 
              logInUser={this.logInUser}
              setMessageBox={this.setMessageBox}
            />
          </ModalWindow>
        }
        {this.props.modal === 'Login' &&
          <ModalWindow changeModal={this.props.changeModal}>
            <LoginForm 
              changeModal={this.props.changeModal} 
              logInUser={this.logInUser}
              setMessageBox={this.setMessageBox}
            />
          </ModalWindow>
        }
        {this.props.modal === 'Sign Out' &&
          <ModalWindow changeModal={this.props.changeModal}>
            <SignOutForm 
              changeModal={this.props.changeModal} 
              signOutUser={this.signOutUser}
            />
          </ModalWindow>
        }
      </div>
    );
  }
}

const mapStateToProps =(state) =>{
  return({
    route: state.route.route,
    countrySelection: state.route.countrySelection,
    resortSelection: state.route.resortSelection,
    modal: state.modal.modal
  });
}

const mapDispatchToProps = (dispatch) =>{
  return ({
    changeRoute: (text) => dispatch(routingActions.setRoute(text)),
    changeCountry: (country) => dispatch(routingActions.setCountry(country)),
    changeResort: (resort) => dispatch(routingActions.setResort(resort)),
    changeModal: (modal) => dispatch(modalActions.setModal(modal))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
