class Hello extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  clickCount = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    return(
      <div className={this.state.clicked ? 'clicked' : null} onClick={this.clickCount}>
        Hello
        {this.props.name}
        {this.state.counter}
      </div>
    )
  }
}
