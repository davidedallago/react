class Footer extends React.Component {
  render() {
    return <div id={data.length-1} className='textcontainer contactstexcontainer fadebackground'>
             <h1 className="containertextprop ">{this.props.title}</h1>
             <a className="nodecoration" href={this.props.components[0].link} target="_blank">
              <p>&#9658;<strong>{" " + this.props.components[0].subTitle}</strong> profile</p>
             </a>
              <a className="nodecoration" href={this.props.components[1].link} target="_blank">
                <p>&#9658;<strong>{" " + this.props.components[1].subTitle}</strong> profile</p>
              </a>
              <a className="nodecoration" href={this.props.components[2].link} target="_blank">
                <p>&#9658;<strong>{" " + this.props.components[2].subTitle}</strong> profile</p>
              </a>
              <p>
                &#9658;
                <strong>{" " + this.props.components[3].subTitle}</strong>
                {" " + this.props.components[3].link}
              </p>
           </div>
  }
}

export default class Footer;
