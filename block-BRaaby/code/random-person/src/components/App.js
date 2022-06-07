import React from 'react';
import Loader from './Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
      title: '',
      titleValue: '',
      value: '',
    };
  }
  handleChange = (value) => {
    var fullName =
      this.state.data.results[0].name.title +
      ' ' +
      this.state.data.results[0].name.first +
      ' ' +
      this.state.data.results[0].name.last;
    if (value === 'user') {
      this.setState({
        title: 'My Name is ',
        titleValue: fullName,
      });
    } else if (value === 'email') {
      this.setState({
        title: 'My Mail ID is ',
        titleValue: this.state.data.results[0].email,
      });
    } else if (value === 'dob') {
      this.setState({
        title: 'My DOB is ',
        titleValue: this.state.data.results[0].dob.date,
        value: 'Age : ' + this.state.data.results[0].dob.age,
      });
    } else if (value === 'location') {
      this.setState({
        title: 'My Address is',
        titleValue:
          this.state.data.results[0].location.street.number +
          this.state.data.results[0].location.street.name,
        value:
          this.state.data.results[0].location.city +
          ', ' +
          this.state.data.results[0].location.state +
          ', ' +
          this.state.data.results[0].location.country +
          ' - ' +
          this.state.data.results[0].location.postcode,
      });
    } else if (value === 'contact') {
      this.setState({
        title: 'My Contact Number is',
        titleValue: 'Phone : ' + this.state.data.results[0].phone,
        value: 'Cell' + this.state.data.results[0].cell,
      });
    }
  };
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  changeHover = () => {
    this.componentDidMount();
  };

  render() {
    if (!this.state.data) {
      return <Loader />;
    }
    return (
      <div className="container">
        <img
          src={this.state.data.results[0].picture.large}
          alt={this.state.data.results[0].picture.large}
        />
        <p>
          {this.state.title ||
            this.state.data.results[0].name.first +
              ' ' +
              this.state.data.results[0].name.last}
        </p>
        <p>{this.state.titleValue || this.state.data.results[0].titleValue}</p>
        <p>{this.state.value}</p>
        <div>
          <i
            className="fas fa-phone text-3xl text-gray-700 cursor-pointer"
            onClick={() => this.handleChange('user')}
          ></i>
          <i
            className="fas fa-phone text-3xl text-gray-700 cursor-pointer"
            onClick={() => this.handleChange('email')}
          ></i>
          <i
            className="fas fa-phone text-3xl text-gray-700 cursor-pointer"
            onClick={() => this.handleChange('dob')}
          ></i>
          <i
            className="fas fa-phone text-3xl text-gray-700 cursor-pointer"
            onClick={() => this.handleChange('location')}
          ></i>
          <i
            className="fas fa-phone text-3xl text-gray-700 cursor-pointer"
            onClick={() => this.handleChange('contact')}
          ></i>
        </div>
        <button onClick={this.changeHover}>click</button>
      </div>
    );
  }
}

export default App;
