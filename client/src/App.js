import React, { Component } from 'react';
import Map from "./Map";
import styled from 'styled-components';
import Form from "./Form";

const AppContainer = styled.div`
   display : flex;
`;
class App extends Component {
  render() {
    return (
      <AppContainer>
           <Map/>
           <Form/>
      </AppContainer>
    );
  }
}

export default App;
