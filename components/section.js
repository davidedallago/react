export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "section"
    };
  }
  render() {
    return <div className="section fadebackground" id={this.props.id}>
              <div className='elementcontainer'>
                <div className="elementgroupprop photogroupleftdist1 photogroupbottomdist">
                  <img className='photodim shadowprop' src={this.props.components[0].link}/>
                  <h3>{this.props.components[0].subTitle}</h3>
                </div>
                <div className="elementgroupprop photogroupleftdist2 photogroupbottomdist">
                  <img className='photodim shadowprop' src={this.props.components[1].link}/>
                  <h3>{this.props.components[1].subTitle}</h3>
                </div>
                <div className="elementgroupprop photogroupleftdist3 photogroupbottomdist">
                  <img className='photodim shadowprop' src={this.props.components[2].link}/>
                  <h3>{this.props.components[2].subTitle}</h3>
                </div>
                <div className="elementgroupprop photogroupleftdist1 photogrouptopdist">
                  <img className='photodim shadowprop' src={this.props.components[3].link}/>
                  <h3>{this.props.components[3].subTitle}</h3>
                </div>
                <div className="elementgroupprop photogroupleftdist2 photogrouptopdist">
                  <img className='photodim shadowprop' src={this.props.components[4].link}/>
                  <h3>{this.props.components[4].subTitle}</h3>
                </div>
                <div className="elementgroupprop photogroupleftdist3 photogrouptopdist">
                  <img className='photodim shadowprop' src={this.props.components[5].link}/>
                  <h3>{this.props.components[5].subTitle}</h3>
                </div>
              </div>

              <div className='textcontainer'>
                <h1 className="containertextprop leftalign">{this.props.title}</h1>
                <p className="leftalign">{this.props.description}</p>
                <div className="leftalign">
                  <a className="btn-other" href={this.props.viewMore}>VIEW MORE</a>
                </div>
              </div>
           </div>
  }
}
