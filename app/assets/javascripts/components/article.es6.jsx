class Article extends React.Component {

  constructor(props) {
    super(props);
    this.getDescription = this.getDescription.bind(this);
  }

  getDescription(article) {
    return {
      __html: article.description
    }
  }

  render() {
    var article = this.props.data;
    return <div className="grid-item">
      <form acceptCharset="UTF-8" action="/home/index" method="post">
        <div className="col s12 m6">
          <div className="card z-depth-4 teal lighten-5">
            <div className="card-content">
              <a href={article.link} className="card-title teal-text text-darken-4"
                 style={{lineHeight: '1em', fontWeight: 400}}>
                {article.title}
              </a>
              <div dangerouslySetInnerHTML={this.getDescription(article)}/>
            </div>
            <div className="card-action">
              <button className="btn-floating " type="submit" name="action">
                <i className="material-icons left">favorite</i>
              </button>
              <a className="btn-floating" href={article.link} target="_blank" style={{marginLeft: '1em'}}>
                <i className="material-icons left">link</i>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>;
  }
}
