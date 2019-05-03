import React, {Component} from 'react';
import './Show_Result.css'

class Show_Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rupiahAmount: "",
            rupiahFraction: [],
            fractionCounter: [],
            leftRupiahAmount: "",
            errorMessage: []
        };
        this.rupiahFraction = this.rupiahFraction.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            rupiahAmount: nextProps.rupiahAmount,
            rupiahFraction: nextProps.rupiahFraction,
            fractionCounter: nextProps.fractionCounter,
            leftRupiahAmount: nextProps.leftRupiahAmount,
            errorMessage: nextProps.errorMessage
        })
    }

    showAmountTotal() {
        if (this.state.rupiahAmount.length > 0) {
            let reverse = this.state.rupiahAmount.toString().split('').reverse().join(''),
                amount = reverse.match(/\d{1,3}/g);
            amount = amount.join('.').split('').reverse().join('');
            return (
                <th colSpan="2" id="totalAmount">
                    Total Amount
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Rp.&nbsp;&nbsp;{amount},00
                </th>
            );

        }
    }

    rupiahFraction() {
        return this.state.rupiahFraction.map((fraction, index) => {
            if (this.state.fractionCounter[index] > 0) {
                let reverse = this.state.rupiahFraction[index].toString().split('').reverse().join(''),
                    amount = reverse.match(/\d{1,3}/g);
                amount = amount.join('.').split('').reverse().join('');
                return (
                    <tr key={index}>
                        <td width="20%" id="rupiahFraction">Rp.&nbsp;{amount}</td>
                        <td width="20%" id="fractionCounter">{this.state.fractionCounter[index]}&nbsp;Pcs</td>
                    </tr>
                );
            }
        });
    }

    showLeftAmount() {
        if (this.state.leftRupiahAmount > 0) {
            return (
                <tr>
                    <td colSpan="2" id="leftAmount">
                        Left Amount:&nbsp;&nbsp;&nbsp;
                        Rp.&nbsp;{this.state.leftRupiahAmount}
                    </td>
                </tr>
            );
        }
    }


    render() {
        if (this.state.rupiahAmount.length > 0) {
            if (this.state.errorMessage.isError){
                return(
                    <p id="errorMessage">{this.state.errorMessage.message}</p>
                );
            }
            else {
                return (
                    <div className="resultContainer">
                        <table>
                            <thead>

                            <tr>
                                {this.showAmountTotal()}
                            </tr>
                            </thead>
                            <tbody>
                            {this.rupiahFraction()}
                            {this.showLeftAmount()}
                            </tbody>
                        </table>
                    </div>
                );
            }
        }
        else {
            if (this.state.errorMessage.isError){
                return(
                    <p id="errorMessage">{this.state.errorMessage.message}</p>
                );
            }
            else{
                return (
                    <div className="resultContainer"/>
                );
            }

        }
    }
}

export default Show_Result;
