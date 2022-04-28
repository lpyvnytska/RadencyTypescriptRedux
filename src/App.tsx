import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import Header from './components/Header/Header';
import NoteForm from './components/NoteForm/NoteForm';
import TableStatic from './components/Tables/TableStatic';
import TableToDoList from './components/Tables/TableToDoList';
import { parseDatesFromText } from './utils/regexpDate'

import { addNote } from './redux/actions';
import { Note, Category } from './redux/types';

const App: FC = () => {
  const dispatch = useDispatch()
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

  const addNoteHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { name, categories, content } =
      e.target as typeof e.target & {
        name: { value: string };
        categories: { value: string };
        content: { value: string };
      };
    console.log(name.value, categories.value, content.value);
    setIsFormVisible(false)
    let newNote: Note = {
      name: name.value,
      created: new Date(),
      category: Category[categories.value as keyof typeof Category],
      content: content.value,
      dates: parseDatesFromText(content.value),
      active: true
    }
    dispatch(addNote( newNote ));
  }

  return (
    <div className="App">
      <Header title="Task2" subtitle='Todo list' />
      <main>
        <TableToDoList></TableToDoList>
        <button onClick={() => setIsFormVisible(true)} className="create__button">Create note</button>
        <TableStatic></TableStatic>
      </main>
      {isFormVisible && <NoteForm handleCancel={() => setIsFormVisible(false)} handleSubmit={e => addNoteHandler(e)} />}
    </div>
  );
}

export default App;
