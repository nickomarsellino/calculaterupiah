import React, { Component } from 'react';
import './Rupiah_Form.css'

import ShowResult from '../Show_Result/Show_Result'

class Rupiah_Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rupiahAmount: "",
            rupiahAmountFinal: "",
            errorMessage:{
                isError: false,
                message: ""
            },
            rupiahFraction: [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50],
            fractionCounter: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            leftRupiahAmount: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    setStateToNormal(){
        for(let i=0; i<10; i++){
            let arr = [];
            arr = this.state.fractionCounter;
            arr[i] = 0;
            this.setState({
                fractionCounter : arr
            });
        }

        this.setState(prevState => ({
            errorMessage: {
                ...prevState.errorMessage,
                isError: false,
                message: ""

            }
        }))
    }

    onHandleSubmit(e){
        e.preventDefault()

        this.setStateToNormal();

        this.rupiahValidation(this.state.rupiahAmount)
    }

    rupiahValidation(rupiahAmount){
        if(rupiahAmount.indexOf('Rp') > -1){

            if(rupiahAmount.charAt(0) !== 'R' && rupiahAmount.charAt(1) !== 'p'){
                this.showErrorMessage("valid character in wrong position")
            }
            else{
                let  amount = rupiahAmount.replace(/^Rp+/i, '');

                if(amount.length > 0 ){
                    if(rupiahAmount.endsWith(',00')){
                        amount = amount.replace(/[._]/g, '');
                        amount = amount.replace(',00', '');
                        if(amount.indexOf(',') > -1){
                            this.showErrorMessage("Invalid Separator")
                        }
                        else {
                            this.rupiahAmountCalculation(amount)
                        }
                    }
                    else if(amount.indexOf(',') > -1){
                        this.showErrorMessage("Invalid Separator")
                    }
                    else {
                        amount = amount.replace('.', '');
                        amount = amount.replace('.', '');

                        this.rupiahAmountCalculation(amount)
                    }
                }
                else {
                    this.showErrorMessage("Missing Value")
                }
            }

        }
        else if(rupiahAmount.endsWith(',00')){
            let amount = rupiahAmount.replace(',00', '');
            if(amount.indexOf(',') > -1){
                this.showErrorMessage("Invalid Separator")
            }
            else {
                amount = amount.replace(/[._]/g, '');
                this.rupiahAmountCalculation(amount)
            }

        }
        else {
            if(rupiahAmount.indexOf('.') > -1){
                let amount = rupiahAmount.replace(/[._]/g, '');
                this.rupiahAmountCalculation(amount)
            }
            else if (rupiahAmount.indexOf(',') > -1){
                this.showErrorMessage("Invalid Separator")
            }
            else if (rupiahAmount.indexOf(' ') > -1){
                this.showErrorMessage("Invalid Separator")
            }
            else {
                if (isNaN(rupiahAmount))
                {
                    this.showErrorMessage("Missing Value")
                }
                else {
                    let amount = /[1-9](.+)/.exec(rupiahAmount)[0];
                    this.rupiahAmountCalculation(amount)
                }
            }
        }
    }

    rupiahAmountCalculation(rupiahAmount){
        let rupiahResult = rupiahAmount;

        while (rupiahResult > 50){
            if(rupiahResult >= 100000){
                rupiahResult = rupiahResult - 100000;

                let arr = [];
                arr = this.state.fractionCounter;
                arr[0] = this.state.fractionCounter[0]+1;
                this.setState({
                    fractionCounter : arr
                });
            }
            else if(rupiahResult >= 50000){
                rupiahResult = rupiahResult - 50000;

                this.setState(prevState => {
                    let newArray = prevState.fractionCounter;
                    newArray[1] = this.state.fractionCounter[1] + 1;
                    return { fractionCounter: newArray }
                });
            }
            else if(rupiahResult >= 20000){
                rupiahResult = rupiahResult - 20000;

                this.setState(prevState => {
                    let newArray = prevState.fractionCounter;
                    newArray[2] = this.state.fractionCounter[2] + 1;
                    return { fractionCounter: newArray }
                });
            }
            else if(rupiahResult >= 10000){
                rupiahResult = rupiahResult - 10000;

                this.setState(prevState => {
                    let newArray = prevState.fractionCounter;
                    newArray[3] = this.state.fractionCounter[3] + 1;
                    return { fractionCounter: newArray }
                });
            }
            else if(rupiahResult >= 5000){
                rupiahResult = rupiahResult - 5000;

                this.setState(prevState => {
                    let newArray = prevState.fractionCounter;
                    newArray[4] = this.state.fractionCounter[4] + 1;
                    return { fractionCounter: newArray }
                });
            }
            else if(rupiahResult >= 2000){
                rupiahResult = rupiahResult - 2000;

                this.setState(prevState => {
                    let newArray = prevState.fractionCounter;
                    newArray[5] = this.state.fractionCounter[5] + 1;
                    return { fractionCounter: newArray }
                });
            }
            else if(rupiahResult >= 1000){
                rupiahResult = rupiahResult - 1000;

                this.setState(prevState => {
                    let newArray = prevState.fractionCounter;
                    newArray[6] = this.state.fractionCounter[6] + 1;
                    return { fractionCounter: newArray }
                });
            }
            else if(rupiahResult >= 500){
                rupiahResult = rupiahResult - 500;

                this.setState(prevState => {
                    let newArray = prevState.fractionCounter;
                    newArray[7] = this.state.fractionCounter[7] + 1;
                    return { fractionCounter: newArray }
                });
            }
            else if(rupiahResult >= 100){
                rupiahResult = rupiahResult - 100;

                this.setState(prevState => {
                    let newArray = prevState.fractionCounter;
                    newArray[8] = this.state.fractionCounter[8] + 1;
                    return { fractionCounter: newArray }
                });
            }
            else if(rupiahResult >= 50) {
                rupiahResult = rupiahResult - 50;

                this.setState(prevState => {
                    let newArray = prevState.fractionCounter;
                    newArray[9] = this.state.fractionCounter[9] + 1;
                    return { fractionCounter: newArray }
                });
            }
        }

        this.setState({
            leftRupiahAmount: rupiahResult,
            rupiahAmountFinal: rupiahAmount
        })
    }

    showErrorMessage(message){
        this.setState(prevState => ({
            errorMessage: {
                ...prevState.errorMessage,
                isError: true,
                message: message

            }
        }))
    }

    render() {
        return (
            <form className="inputRupiahForm" onSubmit={this.onHandleSubmit}>
                <input type="text"
                       name="rupiahAmount"
                       placeholder="ex (Rp.123 or 12.000)"
                       onChange={this.handleInputChange}
                       id="rupiahAmountInput"
                />
                <button type="submit"
                        id="enterButton"
                >Enter</button>

                <ShowResult
                    rupiahAmount={this.state.rupiahAmountFinal}
                    rupiahFraction={this.state.rupiahFraction}
                    fractionCounter={this.state.fractionCounter}
                    leftRupiahAmount={this.state.leftRupiahAmount}
                    errorMessage = {this.state.errorMessage}
                />
            </form>
        );
    }
}

export default Rupiah_Form;
