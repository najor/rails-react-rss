class ListArticles extends React.Component {
  render() {
    return <div>
      {this.props.articles.map(function(art) {
        return <Article key={art.id} data={art}> </Article>;
      })}
    </div>;
  }
}

