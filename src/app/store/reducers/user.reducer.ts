import {User} from "../models/user.model";
import {Action} from "@ngrx/store";
import {Actions, USER_ACTION_TYPES} from "../actions/user.action";

export const userInitialState:User = {
  authenticated:false,
  username: '',
  user_image: '',
  uid: ''
}

export function userStoreReducer(state: User = userInitialState, action: Actions) {
  switch (action.type) {
    case USER_ACTION_TYPES.AUTH:
      let authentic:boolean
      if(action.payload.username){
        authentic = true;
      }
      else{
        authentic = false;
      }
      const updatedState = {...state, authenticated: authentic, username: action.payload.username,
        user_image: action.payload.user_image, uid: action.payload.uid }
      return updatedState;

    case USER_ACTION_TYPES.UNAUTH:

      return Object.assign(state, { authenticated: false, username: '', user_image: '' });

    case USER_ACTION_TYPES.USER_SAVE:
    case USER_ACTION_TYPES.LOGIN:
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
    case USER_ACTION_TYPES.LOGOUT:
    default:
      return state;
  }
}
