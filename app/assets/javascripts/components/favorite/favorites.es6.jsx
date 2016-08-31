class Favorites extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200
    });
  }

  render() {
    return <div>
      <Navigator/>
      <div className="grid" style={{margin: '2%'}}>
        {this.props.favorites.map(function (fav) {
          return <FavoriteItem key={fav.id} favorite={fav}/>
        })}
      </div>
    </div>;
  }
}
