import React, { useState } from 'react';
import styled from 'styled-components';
import { sortArrayBy } from '../../../../../utils';
import { Button } from '../../../../components';

const StyleButton = styled(Button)`
  background: ${({ filter, children }) => {
    if (filter === children.toLowerCase()) {
      return 'green';
    }
    return 'grey';
  }};
  border: none;
  margin: 10px;
  padding: 10px 20px;
  transition: 0.5s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #99cc32;
  }
`;

function Filter({ scoreBoard, setBoard }) {
  const [filteredBy, setFilteredBy] = useState('time');

  return (
    <div className="OneScoreBoard--filter">
      <p>Filter by: </p>
      <StyleButton
        filter={filteredBy}
        onClick={() => {
          setBoard(sortArrayBy([...scoreBoard], 'time'));
          setFilteredBy('time');
        }}
      >
        Time
      </StyleButton>
      <StyleButton
        filter={filteredBy}
        onClick={() => {
          setBoard(sortArrayBy([...scoreBoard], 'movesCount'));
          setFilteredBy('moves');
        }}
      >
        Moves
      </StyleButton>
    </div>
  );
}

export default Filter;
