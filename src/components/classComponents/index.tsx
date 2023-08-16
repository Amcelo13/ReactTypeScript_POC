import { Component } from 'react'

type CounterProps = {
  message: string
}
type CounterState = {
  count: number
}

/** For empty props write --> {} and for empty state write nothing*/
export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }
  render() {
    return (
      <div style={{marginTop:"2rem"}}>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}