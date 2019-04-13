export const ADD = 'ADD';
export const CLEAR = 'CLEAR'
export const COMPLETE = 'COMPLETE'

export const addText = text => {
    return {
        type: ADD,
        text,
    };
};

export const clearText = () => {
    return {
        type: CLEAR
    }
}

export const complete = id => {
    return {
        type: COMPLETE, 
        id
    }
}