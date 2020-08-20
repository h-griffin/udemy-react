import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>hello, world!</h1>
            </div>
        );

    //                            element  object  children  text
        // return React.createElement('div',null,'h1','hello world');

        //                                                         h1 elememnt      h1 text       reg text
        // return React.createElement('div',null,React.createElement('h1',null,'hellow world?'),'hello world');

        //           create div                    css                  create h1 child
        // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello world?'),'hello world');
    }
}

export default App;
