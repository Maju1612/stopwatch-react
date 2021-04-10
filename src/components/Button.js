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


    export default Button