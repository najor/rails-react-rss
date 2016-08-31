class Favorite extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Navigator/>
      <FavoriteItem favorite={this.props.favorite}/>
    </div>;
  }
}
