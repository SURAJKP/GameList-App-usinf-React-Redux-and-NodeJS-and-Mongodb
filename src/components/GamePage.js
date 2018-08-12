import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GamesList from './GamesList';
import fetchGames from '../action/actions';


class GamePage extends React.Component{
    componentDidMount(){
        this.props.fetchGames();
    }
    render(){
        return(
            <div>
                <h1>GamesList</h1>
                <GamesList games={this.props.games} />
            </div>
        );
    }
}

GamePage.propTypes={
    games:PropTypes.array.isRequired,
    fetchGames:PropTypes.array.isRequired
}

function mapStateToProps(state){
    return{
        games:state.games
    }
}


export default connect(mapStateToProps,{fetchGames})(GamePage);