import React from 'react';
import Header from './components/header/index.jsx';
import Body from './components/body/index.jsx';
import Footer from './components/footer/index.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      /*
        Plausible properties:
        Github Repositories fetched via Github API
         -> store metadata for each github repo
         -> render data in snippets
        
      */
      showModalEmail: false,
    }
  }


  render() {
    return (
      <div className="main">
        {/* 
          
        */}
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;