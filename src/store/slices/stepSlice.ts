import { createSlice } from '@reduxjs/toolkit'

interface StepState {
    prescoringStep: number,
    scoringStep: number,
}

let startPrescoringStep = 1;

if (localStorage.getItem('userId') !== null) {
    if (localStorage.getItem('userStatus') === 'PREAPPROVAL' ) {
        startPrescoringStep = 2;
    } else {
        startPrescoringStep = 3;
    }
}
    
console.log('f',startPrescoringStep, localStorage.getItem('userStatus'))

let startScoringStep = 1;

if (localStorage.getItem('secondForm') === 'done') {
    startScoringStep = 2;
}


const initialState: StepState = {
    prescoringStep: startPrescoringStep,
    scoringStep: startScoringStep
}

export const stepSlice = createSlice({
    name: 'step',
    initialState: initialState,
    reducers: {
        changePrescoringStep(state, action) {
            state.prescoringStep = action.payload
        },
        changeScoringStep(state, action) {
            state.scoringStep = action.payload
        }
    }
})

export const { changePrescoringStep, changeScoringStep } = stepSlice.actions;
export default stepSlice.reducer;