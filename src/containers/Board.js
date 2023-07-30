import React from 'react';
import styled from 'styled-components';
import Lane from '../components/Lane/Lane';
import withDataFetching from '../withDataFetching';

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Board = ({ lanes, data, error, loading }) => (
  <BoardWrapper>
    {lanes.map(lane => <Lane title={lane.title} key={lane.id} tickets={data.filter(ticket => ticket.lane === lane.id)} loading={loading} error={error}/>)}
  </BoardWrapper>
)



export default withDataFetching(Board);
