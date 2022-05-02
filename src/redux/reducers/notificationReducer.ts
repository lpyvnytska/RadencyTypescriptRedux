
import { NotificationState, NotificationAction, SET_NOTIFICATION } from "../types";

const initialState: NotificationState = {
  message: '',
  status: 'info'
}

const notificationReducer = (state = initialState, action: NotificationAction): NotificationState => {
  switch(action.type) {
    case SET_NOTIFICATION:
      return {
        message: action.payload.msg,
        status: action.payload.status
      }

    default:
      return state;
  }
}

export default notificationReducer;