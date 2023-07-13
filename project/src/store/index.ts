import {configureStore} from '@reduxjs/toolkit';
//import {createAPI} from '../services/api';
import reducer from './reduser';


export const store = configureStore({reducer});
