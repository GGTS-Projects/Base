import React from 'react'
import {Link} from 'react-router';

const GameCard = ({game, deleteGame}) => {
    return (
        <div className="col-md-3 col-sm-6 hero-feature">
            <div className="thumbnail">
                <img src={game.cover} alt="Game Cover"/>
            </div>

            <div className="caption">
                <h3 className="header">{game.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <p>
                <Link to={'/game/' + game._id} className="btn btn-primary">Edit</Link>
                <div className="btn btn-default" onClick={() => deleteGame(game._id)}>Delete</div>
            </p>
        </div>
    )
}
GameCard.propTypes = {
    game: React.PropTypes.object.isRequired,
    deleteGame: React.PropTypes.func.isRequired
}
export default GameCard;