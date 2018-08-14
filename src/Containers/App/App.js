import React, { Component } from 'react';
//import { BrowserRouter as Router, Route} from 'react-router';
import TopBar from '../../Components/TopBar/TopBar';
import CountryCards from '../CountryCards/CountryCards';
import ResortCards from '../ResortCards/ResortCards';
import ModalWindow from '../ModalWindow/ModalWindow';
import SignupForm from '../../Components/SignupForm/SignupForm';
import LoginForm from '../../Components/LoginForm/LoginForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      route:'Home',
      modal:'',
      imageLoaded: true,
      fadeIn: true,
      countrySelection:'',
      resortSelection:'',
    }

    this.changeSelection = this.changeSelection.bind(this);
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
          <TopBar changeModal={this.changeModal} changeRoute={this.changeRoute} />
          
          {
            this.state.countrySelection === '' ?
            <CountryCards changeSelection={this.changeSelection} countrySelection={this.state.countrySelection} />
          : 
            this.state.resortSelection === '' ?
            <ResortCards countrySelection={this.state.countrySelection} changeSelection={this.changeSelection}/>
          : 
            <div>{this.state.resortSelection}</div>
          }

        </div>

        {this.state.modal === 'Signup' &&
          <ModalWindow changeModal={this.changeModal}><SignupForm changeModal={this.changeModal}></SignupForm></ModalWindow>
        }
        {this.state.modal === 'Login' &&
          <ModalWindow changeModal={this.changeModal}><LoginForm changeModal={this.changeModal}></LoginForm></ModalWindow>
        }
        
      </div>
    );
  }
}

export default App;
