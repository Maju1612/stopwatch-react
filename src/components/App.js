import React from 'react'
import './App.css';
import WatchPanel from './WatchPanel'
import Buttons from './Buttons'
import Modal from './Modal'

class App extends React.Component {
  state = {
    seconds:0,
    minutes:0,
    lastSeconds:0,
    lastMinutes:0,
    showLastTime:false,
    intervalId:null,
    showHistory:false,
    times: [],
    showModal:false
  }


  handleStartClick = () => {
    clearInterval(this.state.intervalId)
    const intervalId = setInterval(() => {
      const seconds = this.state.seconds
      const minutes = this.state.minutes
      if (seconds < 60) {
      this.setState({
        intervalId,
        seconds: seconds +1,
      })
      } else{
        this.setState({
          intervalId,
          seconds: 0,
          lastSeconds:0,
          minutes:minutes+1,
        })
      }
    },100)
  }

  handlePauseClick = () => {
    clearInterval(this.state.intervalId)
  }

  handleResetClick = () => {
    clearInterval(this.state.intervalId)
    this.setState({
      seconds: 0,
      minutes: 0,
      showLastTime:false,
      intervalId:null,
      showHistory:false,
      times:[],
      lastMinutes:0,
      lastSeconds:0
    })
  }

  handleStopClick = () => {

    const seconds = this.state.seconds
    const minutes = this.state.minutes
    
    if (seconds !== 0 || minutes !== 0) {
      const times = this.state.times
      this.handleResetClick()
      times.push({
        seconds:seconds,
        minutes:minutes
      })

    this.setState({
      times,
      lastMinutes:minutes,
      lastSeconds:seconds,
      showLastTime:true
    })
    }
  }

  handleHistoryClick = () => {
    this.setState({
      showHistory:!this.state.showHistory
    })
  }

  handleModalButton = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render(){

    const listItem = this.state.times.map((time, id) => (
    <li>Czas #{id+1} 
      <span>{time.minutes}:{time.seconds <= 9 ? `0${time.seconds}`:time.seconds}</span>
    </li>))

  return (
    <div className="wrapper">
      <WatchPanel 
        minutes = {this.state.minutes} 
        seconds = {this.state.seconds}
        lastMinutes = {this.state.lastMinutes} 
        lastSeconds = {this.state.lastSeconds} 
        showLastTime={this.state.showLastTime}
        click={this.handleModalButton}
      />

      <Buttons 
        handleStartClick ={this.handleStartClick} 
        handlePauseClick = {this.handlePauseClick} 
        handleStopClick = {this.handleStopClick} 
        handleResetClick = {this.handleResetClick} 
        handleHistoryClick = {this.handleHistoryClick} 
      />

      <ul className="time-list">
        {this.state.showHistory ? listItem : null}
      </ul>
      <Modal showModal={this.state.showModal} click={this.handleModalButton}/>
</div>
  );
  }
}

export default App;
