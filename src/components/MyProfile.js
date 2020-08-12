import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  constructor(props){
    super(props);
    this.state={
      name: 'Your name',
      gender: 'Male',
      desc: 'Description about yourself',
      read: false
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name, this.state.gender, this.state.desc);
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }


  handleGender = event => {
    this.setState({
      gender: event.target.value
    })
  }

  handleDesc = event => {
    this.setState({
      desc: event.target.value
    })
  }

  handleCheck = event => {
    this.setState({
      read: event.target.checked
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>My Profile</h1>
        <div className='name'>
            <div className='label'><label>Name:</label></div>
            <input type='text' 
            value={this.state.name} 
            onChange={this.handleName}>
            </input>
        </div>
        <div className='gender'>
            <div className='label'><label>Gender:</label></div>
            <select value={this.state.gender} onChange={this.handleGender}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
        </div>
        <div className='desc'>
            <div className='label'><label>Description:</label></div>
            <textarea value={this.state.desc} onChange={this.handleDesc}>
            </textarea>
        </div>
        <div className='check'>
          <input type="checkbox" onChange={this.handleCheck}/>
          <p>I have read the terms of conduct</p>
        </div>
        <button 
                type='submit' 
                disabled={!this.state.name || !this.state.desc || !this.state.read}>
                Submit
        </button>
      </form>
    );
  }
}

export default MyProfile;


