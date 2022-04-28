import { ListAction, Note, GET_LIST, INIT_LIST, ADD_NOTE, DELETE_NOTE, EDIT_NOTE, CHANGE_STATUS_NOTE, ListState } from "../types";

export const getList = (): ListAction => {
  return {
    type: GET_LIST
  }
}

export const initList = (notes: ListState): ListAction => {
  return {
    type: INIT_LIST,
    payload: notes
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