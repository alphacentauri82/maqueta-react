import React, { Component } from 'react';
import Col from './components/Col';
import XXL from './components/XXL';
import XL from './components/XL';
import L from './components/L';
import M from './components/M';
import SBold from './components/SBold';
import S from './components/S';
import XS from './components/XS';
import SBoldUpper from './components/SBoldUpper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Col>
          <XXL>XXL</XXL>
          <XL>XL</XL>
          <L>L</L>
          <M>M</M>
          <SBold>S Bold</SBold>
          <S>S</S>
          <XS>XS</XS>
          <SBoldUpper>S Bold Uppercase</SBoldUpper>
        </Col>
        <Col>
          <XXL>Headline L</XXL>
          <XL>Headline</XL>
          <L>Title</L>
          <M>Subheader</M>
          <SBold>Body 2 / Menu</SBold>
          <S>Body 1</S>
          <XS>Caption</XS>
          <SBoldUpper>Button</SBoldUpper>
        </Col>
        <Col>
          <XXL>Regular 36pt</XXL>
          <XL>Regular 24pt</XL>
          <L>Medium 20pt</L>
          <M>Regular 16pt</M>
          <SBold>Medium 14pt</SBold>
          <S>Regular 14pt</S>
          <XS>Regular 12pt</XS>
          <SBoldUpper>Medium 14pt</SBoldUpper>
        </Col>
      </div>
    );
  }
}

export default App;
