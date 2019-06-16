import { all, fork } from 'redux-saga/effects';

import weatherSaga from './weatherSagas';
import themeSaga from './themeSagas';

function* rootSaga () {
    yield all([
        fork(weatherSaga),
        fork(themeSaga)
      ])
}

export default rootSaga;