import React, {useState} from "react";

export default function Form(props) {
    const [params, setParams] = useState({balance: 0, rate: 0, term: 15})

    function handleChange(event) {
        const {name, value} = event.target;

        setParams(prevValue => {
            return Object.assign({}, prevValue, {[name]: value});
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        props.onCalc(params);
    }

    return (
        <div className="container form">
            <form className="form-horizontal" onSubmit={handleSubmit} >
            <div className="form-group">
                <label className="control-label col-sm-6" htmlFor="balance">Loan Balance</label>
                <input className="col-sm-6" onChange={handleChange} value={params.balance} name="balance" type="number" />
            </div>
            <div className="form-group">
                <label className="control-label col-sm-6" htmlFor="rate">Interest Rate (%)</label>         
                <input className="col-sm-6" onChange={handleChange} value={params.rate} name="rate" type="number" step=".01"/>
            </div>
            <div className="form-group">    
                <label className="control-label col-sm-6" htmlFor="term">Loan Term (years)</label>    
                <select className="form-select col-sm-6" onChange={handleChange} value={params.term} name="term">
                    <option value={15}>{15}</option>
                    <option value={30}>{30}</option>
                </select>
            </div>
            <div className="form-group">        
                <button type="submit" className="btn btn-default">Calculate</button>
            </div>
            </form>
        </div>
    );
}