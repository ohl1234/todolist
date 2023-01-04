import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplateBlock from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`
function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoTemplateBlock>안녕하세요</TodoTemplateBlock>
    </>
  );
}

export default App;
