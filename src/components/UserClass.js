import React from "react"

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      count1: 4,
      userData:{}
    }
  }

  async componentDidMount() {
    console.log("componentDidMount called")
    const data = await fetch("https://api.github.com/users/SwatiBhatia18")
    const json = await data.json()
    this.setState({
      userData: json
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate called');
    if (prevState.count !== this.state.count) {
      console.log('count value changed');
    }

    this.timer = setInterval(()=>{
      console.log("Vani");
    },1000)

  }

  componentWillUnmount() {
    console.log("componentWillUnmount called")
    clearInterval(this.timer)
  }

  render() {
    const { count, count2 } = this.state
    const { name, location, avatar_url } = this.state.userData

    console.log('rendered');

    return (
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            })
          }}
        >
          Increase Count
        </button>
        <h1>{count2}</h1>
        <h1>{this.props.name}</h1>
        <h2>{this.props.location}</h2>
        <h3>{this.props.email}</h3>
         
        <h1>{name}</h1>
        <h1>{location}</h1>
        <img src={avatar_url}></img>
      </div>
    )
  }
}
export default UserClass
