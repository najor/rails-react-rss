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
    var token = this.props.token;

    return <div className="grid-item">
      <form acceptCharset="UTF-8" action="home/add_favorite" method="post">
        <input type='hidden' name='authenticity_token' value={token} />
        <input type='hidden' name='link' value={article.link} />
        <input type='hidden' name='source' value={article.source} />
        <input type='hidden' name='title' value={article.title} />
        <input type='hidden' name='description' value={article.description} />

        <div className="col s12 m6">
          <div className="card z-depth-4 teal lighten-5">
            <div className="card-content">
              <a href={article.link} className="card-title teal-text text-darken-4"
                 style={{lineHeight: '1.3em', fontWeight: 400}}>
                {article.title}
              </a>
              <div dangerouslySetInnerHTML={this.getDescription(article)}/>
            </div>
            <div className="card-action center">
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
