import { createSlice } from '@reduxjs/toolkit'

interface StepState {
    step: number,
}


function setStartStep() {
    let startStep = 1;

    console.log('a',localStorage.getItem('userId') !== null)

    if (localStorage.getItem('userId') !== null) {
        fetch(`http://localhost:8080/admin/application/${Number(localStorage.getItem('userId'))}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        .then(res => {
            console.log(res.status);
            return res.json();
        })
        .then(data => {
            console.log(data.status         );
            if (data.status === 'PREAPPROVAL') {
                startStep = 2 ;
            } else {
                startStep = 3 ;
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    console.log('f',startStep)
    return startStep
}



const initialState: StepState = {
    step: setStartStep(),
}

export const stepSlice = createSlice({
    name: 'step',
    initialState: initialState,
    reducers: {
        changeStep(state, action) {
            state.step = action.payload
        }
    }
})

export const { changeStep } = stepSlice.actions;
export default stepSlice.reducer;