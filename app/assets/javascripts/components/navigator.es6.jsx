class Navigator extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <nav>
        <div className="nav-wrapper teal">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="/"><i className="material-icons">home</i></a></li>
            <li><a href="/favorites"><i className="material-icons">favorite</i></a></li>
          </ul>
        </div>
      </nav>
    </div>;
  }
}
