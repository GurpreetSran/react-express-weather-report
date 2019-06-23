import { takeLatest, put, select } from 'redux-saga/effects';
import { SET_THEME } from '../actions/types';
import { updateTheme } from '../actions/index';

export const defaultTheme = (state) => state.theme.current;

export function * setTheme(action = {}) {
    const currentThemeFromState = yield select(defaultTheme);
    
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