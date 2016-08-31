class ListArticles extends React.Component {

  componentDidMount() {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200
    });
  }

  render() {
    var token = this.props.token;
    return <div className="grid" style={{margin: '2%'}} data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
      {this.props.articles.map(function (art) {
        return <Article key={art.id} data={art} token={token}> </Article>;
      })}
    </div>;
  }
}

