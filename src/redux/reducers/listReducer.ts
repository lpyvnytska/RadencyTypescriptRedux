import { ListAction, ListState, GET_LIST, UPDATE_LIST, ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../types";

const initialState: ListState = {
    notes: []
}

// Helper functions
const getListsFromLS = (): ListState => {
  if(localStorage.getItem('note_list')) {
    return JSON.parse(localStorage.getItem('note_list') || '{}');
  }
  return {notes: []};
}

const saveListsToLS = (list: ListState) => {
  localStorage.setItem('note_list', JSON.stringify(list));
}

export default (state = initialState, action: ListAction): ListState => {
  const listsFromLS = getListsFromLS();

  switch(action.type) {

    default:
      return state;
  }
}