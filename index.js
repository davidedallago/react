// Importing combination
import React, {Component} from 'react';
// Importing Module
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

// Importing CSS
import './styles.css';

const data = [
  {
    title:"PHOTO",
    description:'Nature, portraits, fashion, shops, sports, urban or cars. Photo shoots and image manipulation using tools such as Photoshop or Lightroom.',
    components:[{subTitle:"URBAN", link:"https://picsum.photos/id/230/300/200"},
                {subTitle:"PORTRAIT", link:"https://picsum.photos/id/231/300/200"},
                {subTitle:"NATURE", link:"https://picsum.photos/id/232/300/200"},
                {subTitle:"FASHION", link:"https://picsum.photos/id/233/300/200"},
                {subTitle:"SHOP", link:"https://picsum.photos/id/234/300/200"},
                {subTitle:"CAR", link:"https://picsum.photos/id/235/300/200"}],
    viewMore:"https://www.instagram.com/davide.dallago/"
  },
  {
    title:"VIDEO",
    description:"Direction and editing of corporate videos, advertising or events. In traditional landscape or portrait format to make the most of services such as Instagram Story or IGTV.",
    components:[{subTitle:"HYPERLAPSE", link:"https://picsum.photos/id/330/300/200"},
                {subTitle:"IG TV", link:"https://picsum.photos/id/331/300/200"},
                {subTitle:"YOUTUBE", link:"https://picsum.photos/id/334/300/200"},
                {subTitle:"FACEBOOK", link:"https://picsum.photos/id/335/300/200"},
                {subTitle:"REELS", link:"https://picsum.photos/id/337/300/200"},
                {subTitle:"TIK TOK", link:"https://picsum.photos/id/338/300/200"}],
    viewMore:"https://www.instagram.com/davide.dallago/"
  },
  {
    title:"GRAPHIC",
    description:"Logos, textures, presentations, vector graphics and all that you need to valorize the brand and image of your company.",
    components:[{subTitle:"LOGOS", link:"https://picsum.photos/id/430/300/200"},
                {subTitle:"TEXTURES", link:"https://picsum.photos/id/431/300/200"},
                {subTitle:"IMAGES", link:"https://picsum.photos/id/432/300/200"},
                {subTitle:"VECTORIAL", link:"https://picsum.photos/id/433/300/200"},
                {subTitle:"SHADOW", link:"https://picsum.photos/id/434/300/200"},
                {subTitle:"PHOTOSHOP", link:"https://picsum.photos/id/435/300/200"}],
    viewMore:"https://www.instagram.com/davide.dallago/"
  },
  {
    title:"WEB DESIGN",
    description:"Whether it's a company, a restaurant, an interior design shop or your own portfolio or blog, I have the right solution for you.",
    components:[{subTitle:"PORTFOLIO", link:"https://picsum.photos/id/530/300/200"},
                {subTitle:"APP", link:"https://picsum.photos/id/531/300/200"},
                {subTitle:"BLOG", link:"https://picsum.photos/id/532/300/200"},
                {subTitle:"E-COMMERCE", link:"https://picsum.photos/id/533/300/200"},
                {subTitle:"MESSAGE", link:"https://picsum.photos/id/534/300/200"},
                {subTitle:"OTHERS", link:"https://picsum.photos/id/535/300/200"}],
    viewMore:"https://github.com/davidedallago/"
  },
  {
    title:"CONTACTS",
    description:"None",
    components:[{subTitle:"GitHub", link:"https://github.com/davidedallago/"},
                {subTitle:"LinkedIn", link:"https://www.linkedin.com/in/davide-dal-lago-b96873166/"},
                {subTitle:"Instagram", link:"https://www.instagram.com/davide.dallago/"},
                {subTitle:"E-mail", link:"d.dallago97@gmail.com"}]
  }
];

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
