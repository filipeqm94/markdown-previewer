import React from "react";
import ReactMarkdown from "react-markdown";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const initialState = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === '\`\`\`' && lastLine === '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**

There's also [links](https://www.filipemarques.me), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    const { text } = this.state;
    const markdown = text;

    return (
      <div className='container-fluid row d-flex justify-content-around'>
        <h1 className='text-center col-12 mt-5'>React Markdown Previewer!</h1>
        <div className='col-md-6 col-sm-12 mt-5 wrapper'>
          <h3 className='text-center'>Type Markdown here:</h3>
          <textarea value={text} onChange={this.handleChange}></textarea>
        </div>
        <div className='col-md-6 col-sm-12 mt-5 wrapper'>
          <h3 className='text-center'>Watch the results here!</h3>
          <div className='preview'>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
