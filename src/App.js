import React from 'react';
import MainPage from './components/MainPage';


class App extends React.Component {

  state = {
    step: 0
  };

  plusStep = () => {
    this.setState(prev => ({...prev, step:prev.step + 1}));
  };

  minusStep = () => {
    this.setState(prev => ({...prev, step: prev.step - 1}))
  };


  render() {
    return (
      <div className="App" style={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: '30vh'}}>
        {/* <h1>Hallo</h1> */}
        <MainPage step={this.state.step} plusStep={this.plusStep} minusStep={this.minusStep} />
      </div>
    )
  }

};

export default App;