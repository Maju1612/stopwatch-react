const WatchPanel = props => {
    const {lastMinutes, lastSeconds, seconds, minutes} = props
    const lastTime = <p className="time">{lastMinutes}:{lastSeconds <= 9 ? `0${lastSeconds}`:lastSeconds}</p>
    return(
      <>
      <p className="info" onClick={props.click}>
      <i className="fas fa-question"></i>
      </p>
      <h1>Stoper</h1>
      <p className="stopwatch">{minutes}:{seconds <= 9 ? `0${seconds}`: seconds}</p>
      {props.showLastTime ? lastTime : null}
      </>
      
      )
  }

  export default WatchPanel