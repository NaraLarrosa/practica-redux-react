import React, { Component } from 'react';
import { connect } from 'react-redux';

class CantidadPokemon extends Component {
    render() {
        return(
            <React.Fragment>
                Unidades: { this.props.game_shop.pokemon}
            </React.Fragment>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        game_shop: state.game_shop
    }
};

export default connect(mapStateToProps)(CantidadPokemon);