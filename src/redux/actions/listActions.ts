import { ListAction, GET_LIST, Note, ADD_NOTE, DELETE_NOTE, EDIT_NOTE, CHANGE_STATUS_NOTE } from "../types";

export const getLists = (): ListAction => {
  return {
    type: GET_LIST
  }
}

export const addNote = (note: Note): ListAction => {
  return {
    type: ADD_NOTE,
    payload: note
  }
}

export const deleteNote = (note: Note): ListAction => {
  return {
    type: DELETE_NOTE,
    payload: note
  }
}

export const editNote = (note:Note): ListAction => {
  return {
    type: EDIT_NOTE,
    payload: note
  }
}

export const changeStatusNote = (note:Note): ListAction => {
  return {
    type: CHANGE_STATUS_NOTE,
    payload: note
  }
}