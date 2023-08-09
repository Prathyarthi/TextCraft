import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnClickUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnClickLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText)
    }

    const [text, setText] = useState("");

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    onChange={handleOnChange}
                    value={text}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                />
                <button className="btn btn-primary my-3 mx-2" onClick={handleOnClickUpper} >Convert to UPPERCASE</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleOnClickLower} >Convert to lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleClearText} >Clear Text</button>
                <div>
                    <p>{"Number of words : " + text.split(" ").length}</p>
                    <p>{"Number of characters : " + text.length}</p>
                </div>
            </div>
        </>
    )
}
