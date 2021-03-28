const Buttons = props => {
return(
<div className="buttons" >
    <Button 
        btnClassName="start" 
        iClassName="fas fa-play" 
        click={props.handleStartClick}
    />
    <Button 
        btnClassName="pause" 
        iClassName="fas fa-pause"
        click={props.handlePauseClick}
    />
    <Button 
        btnClassName="stop" 
        iClassName="fas fa-stop"
        click={props.handleStopClick}
    />
    <Button 
        btnClassName="reset" 
        iClassName="fas fa-times"
        click={props.handleResetClick}
    />
    <Button 
        btnClassName="history" 
        text="archiwum" 
        click={props.handleHistoryClick}
    />
</div>
)}


const Button = props => {
    if (props.iClassName) {
      return(
        <button className={props.btnClassName} onClick={props.click}>
          <i className={props.iClassName}></i>
          </button>
      )
      }else{
        return(
        <button className={props.btnClassName} onClick={props.click}>{props.text}</button>
        )
      }
    }


    export default Buttons