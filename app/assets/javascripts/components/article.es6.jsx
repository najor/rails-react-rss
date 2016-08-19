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

  render () {
    var article = this.props.data;
    return <div className="grid-item">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{article.title}</span>
            <div dangerouslySetInnerHTML={this.getDescription(article)} />
          </div>
          <div className="card-action">
            <a href={article.link} target="_blank">Read more</a>
          </div>
        </div>
      </div>
    </div>;
  }
}
