import { createSlice } from '@reduxjs/toolkit';

interface StepState {
    prescoringStep: number,
    scoringStep: number,
    documentStep: number,
    signStep: number,
    success: boolean
}

let startPrescoringStep = 1;

if (localStorage.getItem('userId') !== null) {
    if (localStorage.getItem('userStatus') === 'PREAPPROVAL' ) {
        startPrescoringStep = 2;
    } else {
        startPrescoringStep = 3;
    }
}

let startScoringStep = 1;

if (localStorage.getItem('secondForm') === 'done') {
    startScoringStep = 2;
}

let startDocumentStep = 1;

if (localStorage.getItem('thirdForm') === 'done') {
    startDocumentStep = 2;
}

let startSignStep = 1;

if (localStorage.getItem('sign') === 'done') {
    startSignStep = 2; 
}

let successStep = false;

if (localStorage.getItem('success') === 'ok') {
    successStep = true;
}


const initialState: StepState = {
    prescoringStep: startPrescoringStep,
    scoringStep: startScoringStep,
    documentStep: startDocumentStep,
    signStep: startSignStep,
    success: successStep,
}

export const stepSlice = createSlice({
    name: 'step',
    initialState: initialState,
    reducers: {
        changePrescoringStep(state, action) {
            state.prescoringStep = action.payload;
        },
        changeScoringStep(state, action) {
            state.scoringStep = action.payload;
        },
        changeDocumentStep(state, action) {
            state.documentStep = action.payload;
        },
        changeSignStep(state, action) {
            state.signStep = action.payload;
        },
        changeSuccess(state, action) {
            state.success = action.payload;
        }
    }
})

export const { changePrescoringStep, changeScoringStep, changeDocumentStep, changeSignStep, changeSuccess } = stepSlice.actions;
export default stepSlice.reducer;