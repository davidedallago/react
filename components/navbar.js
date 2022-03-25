import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return <div>
              <div className="background" value="5">
              </div>
              <nav>
                <ul>
                  <li className='selected'>HOME</li>
                  {data.map(function(object, i){
                  return <li>
                          <a href={'#'+i}>{data[i].title}</a>
                         </li>;
                  })}
                </ul>
              </nav>

              <div className="section">
                <div className='homecontainer' id="navbarsec">
                 <h1 className="hometitle">DAVIDE<br/>DAL LAGO</h1>
                </div>
                <div className='homecontainer' id="logocontainer">
                  {data.map(function(object, i){
                  return <a href={'#'+i} className="nodecoration">
                    <h3>{data[i].title}</h3>
                         </a>
                  })}
                </div>
              </div>
           </div>
  }
}

export default Navbar;
