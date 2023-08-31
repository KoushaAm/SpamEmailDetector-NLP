import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';

import './App.css';

const MAX_LEN = 20;

function EmailScamDetection() {
    const [result, setResult] = useState('');

    async function loadModel() {
        const model = await tf.loadLayersModel('tfjs_model/model.json');
        console.log(model);

        return model;
    }
    
    async function predict() {
        const model = await loadModel();
        console.log(model.summary());
    }

    return (
        <div>
            <h1>Email Scam Detection</h1>
            <textarea id="emailText" rows="4" cols="50"></textarea>
            <button onClick={predict}>Check Email</button>
            <p id="result">{result}</p>
        </div>
    );
}

export default EmailScamDetection;
