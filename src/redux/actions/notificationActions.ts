import { NotificationAction, SET_NOTIFICATION } from "../types";

export const setNotification = (msg: string, status: string = 'info'): NotificationAction => {
  return {
    type: SET_NOTIFICATION,
    payload: {
      msg,
      status
    }
  }
}