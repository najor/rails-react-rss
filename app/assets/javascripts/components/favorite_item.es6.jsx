class FavoriteItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="grid-item">
      <div className="col s12 m6">
        <div className="card z-depth-4 teal lighten-5">
          <div className="card-content">
            <span className="card-title">{this.props.favorite.title}</span>
            <p>{this.props.favorite.description}</p>
          </div>
          <div className="card-action center">
            <a className="btn-floating" href={this.props.favorite.link} target="_blank" style={{marginLeft: '1em'}}>
              <i className="material-icons left">link</i>
            </a>
            <a className="btn-floating delete" data-confirm="Are you sure?" rel="nofollow" data-method="delete"
               href={'/favorites/' + this.props.favorite.id}>
              <i className="material-icons left">delete</i>
            </a>
          </div>
        </div>
      </div>
    </div>;
  }
}
