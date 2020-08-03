import {User} from "./models/user.model";
import {userInitialState, userStoreReducer} from "./reducers/user.reducer";
import {ActionReducerMap} from "@ngrx/store";

export interface State {
  user:User
}
export const initialState:State = {
  user: userInitialState
}
export const reducers:ActionReducerMap<State>={
  user: userStoreReducer
}
