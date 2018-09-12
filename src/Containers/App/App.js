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
        fullName:'',
        userID:''
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

  logInUser=(data)=>{
    this.setState({loggedIn: true})
    this.setState({user:{
      email: data.email,
      fullName: data.full_name,
      userID: data.user_id
    }})
  }

  signOutUser(){
    this.setState({loggedIn: false})
    this.setState({modal:''})
    this.setState({user:{
      email:'',
      fullName:'',
      userID:''
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
        <div className={fadeIn}>
          <TopBar changeModal={this.changeModal} changeRoute={this.changeRoute} loggedIn={this.state.loggedIn} logOutUser={this.logInUser}/>
          
          {
            this.state.countrySelection === '' ?
            <CountryCards changeSelection={this.changeSelection} countrySelection={this.state.countrySelection} />
          : 
            this.state.resortSelection === '' ?
            <ResortCards countrySelection={this.state.countrySelection} changeSelection={this.changeSelection}/>
          : 
            <ResortPage resortSelection={this.state.resortSelection} />
          }

        </div>

        {this.state.modal === 'Signup' &&
          <ModalWindow changeModal={this.changeModal}><SignupForm changeModal={this.changeModal} logInUser={this.logInUser}></SignupForm></ModalWindow>
        }
        {this.state.modal === 'Login' &&
          <ModalWindow changeModal={this.changeModal}><LoginForm changeModal={this.changeModal} logInUser={this.logInUser}></LoginForm></ModalWindow>
        }
        {this.state.modal === 'Sign Out' &&
          <ModalWindow changeModal={this.changeModal}><SignOutForm changeModal={this.changeModal} signOutUser={this.signOutUser}></SignOutForm></ModalWindow>
        }
      </div>
    );
  }
}

export default App;
