class Home extends React.Component {

  render() {
    var titleStyle = {
      'text-align': 'center'
    };

    return <div>
      <h2 style={titleStyle}>Home</h2>
      <List articles={this.props.articles} />
    </div>;
  }
}

