const data = [
  {
    title:"PHOTO",
    description:'Nature, portraits, fashion, shops, sports, urban or cars. Photo shoots and image manipulation using tools such as Photoshop or Lightroom.',
    components:[{subTitle:"URBAN", imgLink:"https://picsum.photos/id/230/300/200"},
                {subTitle:"PORTRAIT", imgLink:"https://picsum.photos/id/231/300/200"},
                {subTitle:"NATURE", imgLink:"https://picsum.photos/id/232/300/200"},
                {subTitle:"FASHION", imgLink:"https://picsum.photos/id/233/300/200"},
                {subTitle:"SHOP", imgLink:"https://picsum.photos/id/234/300/200"},
                {subTitle:"CAR", imgLink:"https://picsum.photos/id/235/300/200"}],
    viewMore:"https://www.instagram.com/davide.dallago/"
  },
  {
    title:"VIDEO",
    description:"Direction and editing of corporate videos, advertising or events. In traditional landscape or portrait format to make the most of services such as Instagram Story or IGTV.",
    components:[{subTitle:"HYPERLAPSE", imgLink:"https://picsum.photos/id/330/300/200"},
                {subTitle:"IG TV", imgLink:"https://picsum.photos/id/331/300/200"},
                {subTitle:"YOUTUBE", imgLink:"https://picsum.photos/id/334/300/200"},
                {subTitle:"FACEBOOK", imgLink:"https://picsum.photos/id/335/300/200"},
                {subTitle:"REELS", imgLink:"https://picsum.photos/id/337/300/200"},
                {subTitle:"TIK TOK", imgLink:"https://picsum.photos/id/338/300/200"}],
    viewMore:"https://www.instagram.com/davide.dallago/"
  },
  {
    title:"GRAPHIC",
    description:"Logos, textures, presentations, vector graphics and all that you need to valorize the brand and image of your company.",
    components:[{subTitle:"LOGOS", imgLink:"https://picsum.photos/id/430/300/200"},
                {subTitle:"TEXTURES", imgLink:"https://picsum.photos/id/431/300/200"},
                {subTitle:"IMAGES", imgLink:"https://picsum.photos/id/432/300/200"},
                {subTitle:"VECTORIAL", imgLink:"https://picsum.photos/id/433/300/200"},
                {subTitle:"SHADOW", imgLink:"https://picsum.photos/id/434/300/200"},
                {subTitle:"PHOTOSHOP", imgLink:"https://picsum.photos/id/435/300/200"}],
    viewMore:"https://www.instagram.com/davide.dallago/"
  },
  {
    title:"WEB DESIGN",
    description:"Whether it's a company, a restaurant, an interior design shop or your own portfolio or blog, I have the right solution for you.",
    components:[{subTitle:"PORTFOLIO", imgLink:"https://picsum.photos/id/530/300/200"},
                {subTitle:"FASHION", imgLink:"https://picsum.photos/id/531/300/200"},
                {subTitle:"BLOG", imgLink:"https://picsum.photos/id/532/300/200"},
                {subTitle:"E-COMMERCE", imgLink:"https://picsum.photos/id/533/300/200"},
                {subTitle:"TRIBUTE", imgLink:"https://picsum.photos/id/534/300/200"},
                {subTitle:"LANDING", imgLink:"https://picsum.photos/id/535/300/200"}],
    viewMore:"https://github.com/davidedallago/"
  },
  {
    title:"APPLICATIONS",
    description:"Whether it's a company, a restaurant, an interior design shop or your own portfolio or blog, I have the right solution for you.",
    components:[{subTitle:"CALCULATOR", imgLink:"https://picsum.photos/id/630/300/200", link:"https://davidedallago.github.io/javascript-calculator/"},
                {subTitle:"TIMER", imgLink:"https://picsum.photos/id/631/300/200", link:"https://davidedallago.github.io/timer/"},
                {subTitle:"MARKDOWN PREVIEWER", imgLink:"https://picsum.photos/id/638/300/200", link:"https://davidedallago.github.io/markdown-previewer/"},
                {subTitle:"QUOTE MACHINE", imgLink:"https://picsum.photos/id/633/300/200", link:"https://davidedallago.github.io/quote-machine/"},
                {subTitle:"DRUM MACHINE", imgLink:"https://picsum.photos/id/634/300/200", link:"https://davidedallago.github.io/drum-machine/"},
                {subTitle:"APP 6", imgLink:"https://picsum.photos/id/635/300/200"}],
    viewMore:"https://github.com/davidedallago/"
  },
  {
    title:"CONTACTS",
    description:"None",
    components:[{subTitle:"GitHub", imgLink:"https://github.com/davidedallago/"},
                {subTitle:"LinkedIn", imgLink:"https://www.imgLinkedin.com/in/davide-dal-lago-b96873166/"},
                {subTitle:"Instagram", imgLink:"https://www.instagram.com/davide.dallago/"},
                {subTitle:"E-mail", imgLink:"d.dallago97@gmail.com"}]
  }
];

const projectName = 'personal-portfolio';

class Navbar extends React.Component {
  render() {
    return <div>
              <div className="background" value="5">
              </div>

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

class Section extends React.Component {
  render() {
    return <div className="section fadebackground" id={this.props.id}>
              <div className='textcontainer'>
                <h1 className="containertextprop leftalign">{this.props.title}</h1>
                <p className="leftalign">{this.props.description}</p>
                <div className="leftalign">
                  <a className="btn-other" href={this.props.viewMore}>VIEW MORE</a>
                </div>
              </div>

              <div className='elementcontainer'>
                {this.props.components.map(function(object, i){
                  return <a className="elementgroupprop" href={object.link}>
                          <img className='photodim shadowprop' src={object.imgLink}/>
                          <h3>{object.subTitle}</h3>
                         </a>
                })}
              </div>
           </div>
  }
}

class Footer extends React.Component {
  render() {
    return <div id={length-1} className='textcontainer contactstexcontainer fadebackground'>
             <h1 className="containertextprop ">{this.props.title}</h1>
             <a className="nodecoration" href={this.props.components[0].imgLink} target="_blank">
              <p>&#9658;<strong>{" " + this.props.components[0].subTitle}</strong> profile</p>
             </a>
              <a className="nodecoration" href={this.props.components[1].imgLink} target="_blank">
                <p>&#9658;<strong>{" " + this.props.components[1].subTitle}</strong> profile</p>
              </a>
              <a className="nodecoration" href={this.props.components[2].imgLink} target="_blank">
                <p>&#9658;<strong>{" " + this.props.components[2].subTitle}</strong> profile</p>
              </a>
              <p>
                &#9658;
                <strong>{" " + this.props.components[3].subTitle}</strong>
                {" " + this.props.components[3].imgLink}
              </p>
           </div>
  }
}

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
        <Navbar />
        {rows}
       </div>
}


class App extends React.Component {
  render() {
    return <div>{createApp()}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
