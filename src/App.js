import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoTemplateBlock from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`
function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoTemplateBlock>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplateBlock>
    </>
  );
}

export default App;
