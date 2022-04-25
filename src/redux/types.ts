import { icons } from '../svg_icons'

export const GET_LIST = 'GET_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const CHANGE_STATUS_NOTE = 'CHANGE_STATUS_NOTE';

export const SET_NOTIFICATION = 'SET_NOTIFICATION';

enum Category {
    Idea = icons.IDEA_ICON,
    Quote = icons.QUOTE_ICON,
    Note = icons.TASK_ICON,
    RandomThought = icons.THOUGHT_ICON
}

export interface Note {
    id?: number;
    name: string;
    created: Date;
    category: Category;
    content: string;
    dates?: string;
    active: boolean;
}

//Actions

interface GetListAction {
    type: typeof GET_LIST;
}

interface AddNoteAction {
    type: typeof ADD_NOTE;
    payload: Note;
}

interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    payload: Note;
}

interface EditNoteAction {
    type: typeof EDIT_NOTE;
    payload: Note;
}

interface ChangeStatusNoteAction {
    type: typeof CHANGE_STATUS_NOTE;
    payload: Note;
}

interface SetNotificationAction {
    type: typeof SET_NOTIFICATION;
    payload: {
        msg: string;
        status: string;
    }
}

export type ListAction = GetListAction | AddNoteAction | DeleteNoteAction | EditNoteAction | ChangeStatusNoteAction;

export type NotificationAction = SetNotificationAction;

export interface NotificationState {
    message: string;
    status: string;
}

export interface ListState {
    notes: Note[];    
}