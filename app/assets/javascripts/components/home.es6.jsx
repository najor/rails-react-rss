class Home extends React.Component {

  render() {
    var token = this.props.token;

    return <div>
      <form acceptCharset="UTF-8" action="/home/index" method="get">
        <div className="row" style={{marginBottom: 0, marginTop: 20}}>
          <div className="col s3">
          </div>
          <div className="input-field col s3">
            <i className="material-icons prefix">link</i>
            <input id="url" placeholder={this.props.url} name="url" type="text" className="validate"/>
            <label for="url">Insert RSS URL here</label>
          </div>
          <div className="col" style={{marginTop: 25}}>
            <button className="btn waves-effect waves-light left" type="submit" name="action">
              Get RSS articles <i className="material-icons left">rss_feed</i>
            </button>
          </div>
        </div>
      </form>
      <ListArticles articles={this.props.articles} token={token}/>
    </div>
      ;
  }
}
