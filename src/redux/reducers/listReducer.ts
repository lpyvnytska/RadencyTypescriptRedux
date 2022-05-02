import { ListAction, ListState, GET_LIST, INIT_LIST, ADD_NOTE, DELETE_NOTE, EDIT_NOTE, CHANGE_STATUS_NOTE, Note } from "../types";

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

const listReducer =  (state = initialState, action: ListAction): ListState => {
  const listsFromLS = getListsFromLS();
  let clonedListsFromLS:{notes: Note[]} = {...listsFromLS};
  let clonedNotes: Note[];
  let noteIdx: number;

  switch(action.type) {
    case GET_LIST:
      return {
        ...state,
        ...listsFromLS
      }

    case INIT_LIST:
      saveListsToLS(action.payload);
      return {
        ...state,
        ...action.payload
      }

    case ADD_NOTE:
      let note = {id: Date.now(), ...action.payload}
      clonedListsFromLS.notes.push(note);
      saveListsToLS(clonedListsFromLS);
      
      return {
        ...state,
        ...clonedListsFromLS
      }

    case DELETE_NOTE:
      clonedNotes = [...clonedListsFromLS.notes];
      noteIdx = clonedNotes.findIndex(note => note.id === action.payload);
      clonedNotes.splice(noteIdx, 1);
      clonedListsFromLS = { ...clonedListsFromLS, notes: [...clonedNotes ]}
      saveListsToLS(clonedListsFromLS);
      return {
        ...state,
        ...clonedListsFromLS
        }

    case EDIT_NOTE:
      clonedNotes = [...clonedListsFromLS.notes];
      noteIdx = clonedNotes.findIndex(note => note.id === action.payload.id);
      clonedNotes[noteIdx] = action.payload
      clonedListsFromLS = { ...clonedListsFromLS, notes: [...clonedNotes ]}
      saveListsToLS(clonedListsFromLS);
      return {
        ...state,
        ...clonedListsFromLS
      }

    case CHANGE_STATUS_NOTE:
      clonedNotes = [...clonedListsFromLS.notes];
      noteIdx = clonedNotes.findIndex(note => note.id === action.payload);
      clonedNotes[noteIdx].active = !clonedNotes[noteIdx].active
      clonedListsFromLS = { notes: [...clonedNotes ]}
      saveListsToLS(clonedListsFromLS);
      return {
        ...state,
        ...clonedListsFromLS
      }

    default:
      return state;
  }
}

export default listReducer;