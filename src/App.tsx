import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import './App.css';
import { RootState } from './redux/store'

import Header from './components/Header/Header';
import TableStatic from './components/Tables/TableStatic';
import TableToDoList from './components/Tables/TableToDoList';
import MiddleBlock from './components/MiddleBlock/MiddleBlock';
import { todoList } from './redux/date'
import { initList } from './redux/actions';

const App: FC = () => {
  let fullList = useSelector((state: RootState) => state.list.notes)
  const dispatch = useDispatch()
  useEffect(() => {dispatch(initList(todoList))}, [todoList])

  return (
    <div className="App">
      <Header title="Task2" subtitle='Todo list' />
      <main>
        <TableToDoList showActive={true} fullList={fullList}></TableToDoList>
        <MiddleBlock/>
        <TableStatic fullList={fullList}></TableStatic>
      </main>
    </div>
  );
}

export default App;
