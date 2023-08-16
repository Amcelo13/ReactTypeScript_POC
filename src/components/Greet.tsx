type GreetProps = {    //type of props coming denoted as an object
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

function Greet(props : GreetProps) {

  const {messageCount = 0} = props  //Default message count if not there in the props
  return (
    <div>{props.isLoggedIn ? <p>Welcome {props.name} you have {messageCount} unread messages</p>:"" }</div>
  )
}

export default Greet