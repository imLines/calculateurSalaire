import React, { Component } from "react";

class Calculator extends Component{
    constructor(){
        super();
        this.state = {
            userInput: "",
            salaireNet: ""
        }
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        })
        console.log(this.state.userInput)
    }

    calculer(event){
        event.preventDefault();
        let twentyThreePourcent = this.state.userInput * 0.23;
        const salaireNet = this.state.userInput - twentyThreePourcent;
        this.setState({
            salaireNet: salaireNet
        })
    }


    render(){
        return(
            <div>
                <form className="form">
                    <input 
                        type="number"
                        placeholder="Salaire brut" 
                        onChange={this.onChange.bind(this)} 
                        className="input"
                    />
                    <p>€</p>
                    <button 
                    onClick={this.calculer.bind(this)}
                    className="button"
                    >Calculer</button>
                </form>
                    <div className="resultContainer">
                        <h3>Salaire net : {this.state.salaireNet} €</h3>
                    </div>
            </div>
        )
    }
}

export default Calculator;