import React from 'react';
import BingoCard from './component/bingoCard';
import styled from 'styled-components';

const Header = styled.header`
  background: var(--brown);
  padding: 1em;
  color: var(--cream);
  font-size: 1.25em;
`;

const Main=styled.main`
  padding-top: 2em;
  background: var(--cream);
  min-height: 90vh;
  text-align: center;
`;

function App() {
  return (
    <div>
      <Header className="container-fluid">Bingo</Header>
      <Main className="container-fluid">
        <div className="row">
          <BingoCard />
        </div>
      </Main>
    </div>
  );
}

export default App;
