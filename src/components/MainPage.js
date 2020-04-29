import React from 'react';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';

class MainPage extends React.Component {

    componentDidMount() {
        console.log(this.props.step)
    }

    render() {
        const checkStep = () => {


            

            // if (this.props.step === 0) {
            //     return <button>Start</button>
            // }else if (this.props.step === 1) {
            //     return <Step1 plusStep={this.props.plusStep} />
            // }
            switch(this.props.step) {
                case 0:
                    return <button onClick={this.props.plusStep} style={{cursor: 'pointer',width: '300px', height: '200px', fontSize: '40px', backgroundColor: '#efff'}}>Start</button>
                case 1:
                    return <Step1 plusStep={this.props.plusStep} minusStep={this.props.minusStep} />
                case 2:
                    return <Step2 plusStep={this.props.plusStep} minusStep={this.props.minusStep} />
                case 3:
                    return <Step3 minusStep={this.props.minusStep} />
                default:
                    return console.log('No step')
            }
                
           
                    
        }
        
        return (
            <>
                <div>
                    {checkStep()}
                </div>
            </>
        )
    }
};

export default MainPage;