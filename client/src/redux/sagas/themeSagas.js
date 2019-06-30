import { takeLatest, put, select } from 'redux-saga/effects';
import { SET_THEME } from '../actions/types';
import { updateTheme } from '../actions/index';
import { getDefaultTheme } from '../selectors'


export function * setTheme(action = {}) {
    const currentThemeFromState = yield select(getDefaultTheme);
    
    let theme;

    if (!action.theme) {
        theme =  localStorage.getItem('theme') || currentThemeFromState;
    }

    theme = action.theme || theme;

    yield put(updateTheme(theme));
    yield localStorage.setItem('theme', theme);
}

function * themeSaga() {
    yield takeLatest(SET_THEME, setTheme);
}

export default themeSaga;