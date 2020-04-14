import React from 'react';
import BingoCard from './component/bingoCard';
import styled from 'styled-components';

const Header = styled.header`
  background: var(--brown);
  padding: 0.5em;
  color: var(--cream);
  font-size: 2em;
  font-family: 'Luckiest Guy', cursive;
`;

const Main=styled.main`
  padding-top: 2em;
  // background: var(--cream);
  min-height: calc(100vh - 80px);
  text-align: center;
  
`;

function App() {
  return (
    <div>
      <Header className="container-fluid"><span className="letter">B</span>ingo</Header>
      <Main className="container-fluid">
        <div className="row">
          <BingoCard />
        </div>
      </Main>
    </div>
  );
}

export default App;
