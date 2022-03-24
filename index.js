import Navbar from './components/navbar.js';
import Section from './components/section.js';
import Footer from './components/Footer.js';
import {data} from './data';

const projectName = 'personal-portfolio';

function createApp(){
  var rows = [];
  for (var i = 0; i < data.length; i++) {
    if(i < data.length-1){
      rows.push(<Section 
                  id={i}
                  title={data[i].title}
                  description={data[i].description}
                  components={data[i].components}
                  viewMore={data[i].viewMore} 
                />);
    } else{
      rows.push(<Footer 
               title={data[i].title}
               components={data[i].components}
      />);
    }
  }
return <div>
        <Nav />
        {rows}
       </div>
}


class App extends React.Component {
  render() {
    return <div>{createApp()}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
