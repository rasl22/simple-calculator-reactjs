import React, { useState } from "react";
import "./Calculator.css";

function Calculate() {
    const [results, settsResults] = useState("");

    const onClick = (event) => {
        settsResults(results.concat(event.target.value));
    };

    const onClean = () => {
        settsResults("");
    };

    const getResult = () => {
        try {
            settsResults(eval(results).toString());
        } catch (error) {
            settsResults("Error!!!");
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <input type="text" value={results} placeholder="0" disabled />
            </div>
            <div className="btns">
                <div className="btn-row">
                    <input
                        className="btn"
                        type="button"
                        value="7"
                        onClick={onClick}
                    />
                    <input
                        className="btn"
                        type="button"
                        value="8"
                        onClick={onClick}
                    />
                    <input
                        className="btn"
                        type="button"
                        value="9"
                        onClick={onClick}
                    />
                    <input
                        className="btn operators"
                        type="button"
                        value="/"
                        onClick={onClick}
                    />
                </div>
                <div className="btn-row">
                    <input
                        className="btn"
                        type="button"
                        value="4"
                        onClick={onClick}
                    />
                    <input
                        className="btn"
                        type="button"
                        value="5"
                        onClick={onClick}
                    />
                    <input
                        className="btn"
                        type="button"
                        value="6"
                        onClick={onClick}
                    />
                    <input
                        className="btn operators"
                        type="button"
                        value="*"
                        onClick={onClick}
                    />
                </div>
                <div className="btn-row">
                    <input
                        className="btn"
                        type="button"
                        value="1"
                        onClick={onClick}
                    />
                    <input
                        className="btn"
                        type="button"
                        value="2"
                        onClick={onClick}
                    />
                    <input
                        className="btn"
                        type="button"
                        name="three"
                        value="3"
                        onClick={onClick}
                    />
                    <input
                        className="btn operators"
                        type="button"
                        name="minus"
                        value="-"
                        onClick={onClick}
                    />
                </div>
                <div className="btn-row">
                    <input
                        className="btn clean"
                        type="button"
                        name="clean"
                        value="C"
                        onClick={onClean}
                    />
                    <input
                        className="btn"
                        type="button"
                        name="zero"
                        value="0"
                        onClick={onClick}
                    />
                    <input
                        className="btn equal"
                        type="button"
                        name="equal"
                        value="="
                        onClick={getResult}
                    />
                    <input
                        className="btn operators"
                        type="button"
                        name="plus"
                        value="+"
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default Calculate;
