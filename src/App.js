import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <h1>Styling Debugg</h1>

      </header>
        <h4>This page has 3 major goals. </h4>
        <ol>
          <li>Navbar</li>
          <li>Position/display boxes</li>
          <li>Media Queries</li>
        </ol>

        <div>
          <nav>Number 1</nav>
          <p>Using only the Google developers console, make the above navbar stay on the top of the screen. Don't change the styling of the nav itself (the way it looks). </p>
        </div>

        <div className='num_2'>
          <nav>Number 2</nav>
          <p>Look at the following containers. Only using the console, make them look like the following image (Click the button). Make sure and transfer your work over to the code before you refresh the page!</p>
          <a href="https://i.stack.imgur.com/UDrOe.png" target='blank'>click me</a>
          <section>
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
          </section>
        </div>
        <div>
          <nav>Number 3</nav>
          <p>Assign/fix the media queries to work for 3 different views (phone: 414px width, tablet: 768px, laptop: 1500px)</p>
        </div>
     </div>
    );
  }
}

export default App;
