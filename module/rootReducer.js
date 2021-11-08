import { combineReducers  } from  'redux';
import { all } from 'redux-saga/effects';
import toggleIcon from './common/toggleIcon';
import deviceDetect from './common/device_detect';
const rootReducer = combineReducers({
	toggleIcon,
	deviceDetect,
})

export function* rootSaga(){
	yield all([]);
}

export default rootReducer;