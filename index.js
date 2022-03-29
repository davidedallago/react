const data = [
  {
    /*title:"PHOTO",
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
  {*/
    title:"WEB DESIGN",
    description:"Whether it's a company, a restaurant, an interior design shop or your own portfolio or blog, I have the right solution for you.",
    components:[{subTitle:"WEATHER", imgLink:"./img/web-design/weather.png", link:"https://davidedallago.github.io/weathernow/"},
                {subTitle:"TRIBUTE", imgLink:"./img/web-design/tribute.png", link:"https://davidedallago.github.io/tribute-page/"},
                {subTitle:"LANDING", imgLink:"./img/web-design/landing.png", link:"https://davidedallago.github.io/landing-page/"},
                {subTitle:"DOCUMENTATION", imgLink:"./img/web-design/documentation.png", link:"https://davidedallago.github.io/documentation-page/"},
                {subTitle:"SURVEY", imgLink:"./img/web-design/survey.png", link:"https://davidedallago.github.io/survey-form/"}],
    viewMore:"https://github.com/davidedallago/"
  },
  {
    title:"APPLICATIONS",
    description:"Whether it's a company, a restaurant, an interior design shop or your own portfolio or blog, I have the right solution for you.",
    components:[{subTitle:"CALCULATOR", imgLink:"./img/applications/calculator.png", link:"https://davidedallago.github.io/javascript-calculator/"},
                {subTitle:"TIMER", imgLink:"./img/applications/timer.png", link:"https://davidedallago.github.io/timer/"},
                {subTitle:"MARKDOWN PREVIEWER", imgLink:"./img/applications/markdown-previewer.png", link:"https://davidedallago.github.io/markdown-previewer/"},
                {subTitle:"QUOTE MACHINE", imgLink:"./img/applications/quote-machine.png", link:"https://davidedallago.github.io/quote-machine/"},
                {subTitle:"DRUM MACHINE", imgLink:"./img/applications/drum-machine.png", link:"https://davidedallago.github.io/drum-machine/"}],
    viewMore:"https://github.com/davidedallago/"
  },
  {
    title:"GRAPHS",
    description:"Creation of varius graphs type based on the type of datas and requests.",
    components:[{subTitle:"TREE MAP", imgLink:"./img/graphs/tree-map.png", link:"https://davidedallago.github.io/tree-map/"},
                {subTitle:"CHOROPLETH MAP", imgLink:"./img/graphs/choropleth-map.png", link:"https://davidedallago.github.io/choropleth-map/"},
                {subTitle:"HEAT MAP", imgLink:"./img/graphs/heat-map.png", link:"https://davidedallago.github.io/heat-map/"},
                {subTitle:"SCATTER PLOT", imgLink:"./img/graphs/scatter-plot.png", link:"https://davidedallago.github.io/scatter-plot/"},
                {subTitle:"BAR CHART", imgLink:"./img/graphs/bar-chart.png", link:"https://davidedallago.github.io/bar-chart/"}],
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
    return <div id="navBar" className="section">
               <div className='homecontainer'>
                <h1 className="hometitle">DAVIDE<br/>DAL LAGO</h1>
               </div>
               <div className='homecontainer elementcontainer' id="logocontainer">
                 {data.map(function(object, i){
                 return <a href={'#'+i} className="nodecoration">
                         <h3 className="navSectionTitle">{data[i].title}</h3>
                        </a>
                 })}
               </div>
            </div>
  }
}

class Section extends React.Component {
  render() {
    return <div className="section fadebackground" id={this.props.id}>
              <div className='textcontainer'>
                <h1 className="containertextprop">{this.props.title}</h1>
                <p id="sectionParagraph">{this.props.description}</p>
                <div>
                  <a className="btn-other nodecoration" href={this.props.viewMore}>VIEW MORE</a>
                </div>
              </div>

              <div className='elementcontainer'>
                {this.props.components.map(function(object, i){
                  return <a className="elementgroupprop nodecoration" href={object.link}>
                          <img className='subElementImg photodim shadowprop' src={object.imgLink}/>
                          <h3 className="subElementTitle">{object.subTitle}</h3>
                         </a>
                })}
              </div>
           </div>
  }
}

class Footer extends React.Component {
  render() {
    return <div id={data.length-1} className='textcontainer contactstexcontainer fadebackground'>
             <h1 className="containertextprop">{this.props.title}</h1>
             <a className="footerLink nodecoration" href={this.props.components[0].imgLink} target="_blank">
              <p>&#9658;<strong>{" " + this.props.components[0].subTitle}</strong> profile</p>
             </a>
              <a className="footerLink nodecoration" href={this.props.components[1].imgLink} target="_blank">
                <p>&#9658;<strong>{" " + this.props.components[1].subTitle}</strong> profile</p>
              </a>
              <a className="footerLink nodecoration" href={this.props.components[2].imgLink} target="_blank">
                <p>&#9658;<strong>{" " + this.props.components[2].subTitle}</strong> profile</p>
              </a>
              <p className="footerLink">
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
