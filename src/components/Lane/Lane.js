import React from 'react';
import styled from 'styled-components';
import Ticket from '../Ticket/Ticket'

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: lightGray;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
`;

const Alert = styled.div`
 text-align: center;
`

const Lane = ({ title, tickets, loading, error }) => (
  <LaneWrapper>
    <Title>{title}</Title>
    {(error || loading) && <Alert>{loading ? 'Loading...' : error}</Alert>}
    {tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket}></Ticket>)}
  </LaneWrapper>
);

export default Lane;
