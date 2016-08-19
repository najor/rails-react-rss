class ListArticles extends React.Component {
  render() {
    return <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
      {this.props.articles.map(function (art) {
        return <Article key={art.id} data={art}> </Article>;
      })}
    </div>;
  }
}

