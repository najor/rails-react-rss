var Article = React.createClass({

  render: function () {
    var article = this.props.data;
    return <div className="list-new">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{article.title}</span>
            <p>{article.description}</p>
          </div>
          <div className="card-action">
            <a href={article.link} target="_blank">Read more</a>
          </div>
        </div>
      </div>
    </div>;
  }
});
