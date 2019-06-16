import { takeLatest, put, } from 'redux-saga/effects';
import { SET_THEME, TOGGLE_THEME} from '../actions/types';
import { updateTheme } from '../actions/index';

function * setTheme(action) {
    const theme = localStorage.getItem('theme') || action.theme;
    yield put(updateTheme(theme));
    yield localStorage.setItem('theme', theme);
}

function * updateLocalStorage() {
    let theme = localStorage.getItem('theme');
    theme = theme === 'day' ? 'night' : 'day';
    yield localStorage.setItem('theme', theme);
}

function * themeSaga() {
    yield takeLatest(SET_THEME, setTheme);
    yield takeLatest(TOGGLE_THEME, updateLocalStorage);
}

export default themeSaga;