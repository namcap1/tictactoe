import React, {Component} from 'react';
import intialboard from './initialboard';
import * as utils from '../utils/findwinner';
import Tile from './tile';

class Board extends Component{
    constructor(props){
        super(props);
        this.state = intialboard;
        this.restart = this.restart.bind(this);
    }

    render(){
        const winner = utils.winner(this.state.grid);
        const full = utils.full(this.state.grid);
        let status;
        if(winner){
            if(winner === 'o'){
                status = `The winner is: player 2!`;
            }
            else{
                status = `The winner is: player 1!`;
            }
        }else if(full){
            status = 'Game drawn!'
        }else{
            status = `It is player ${this.state.xisNext ? 'one': 'two'} turn`;
        }
        return(
            <div>
                <h1>Tic Tac Toe</h1>
                <p>{status}</p>
                <div>
                    <Tile value={this.state.grid[0]} onClick={() => this.handlebuttonClick(0)} />
                    <Tile value={this.state.grid[1]} onClick={() => this.handlebuttonClick(1)} />
                    <Tile value={this.state.grid[2]} onClick={() => this.handlebuttonClick(2)} />
                </div>
                <div>
                    <Tile value={this.state.grid[3]} onClick={() => this.handlebuttonClick(3)} />
                    <Tile value={this.state.grid[4]} onClick={() => this.handlebuttonClick(4)} />
                    <Tile value={this.state.grid[5]} onClick={() => this.handlebuttonClick(5)} />
                </div>
                <div>
                    <Tile value={this.state.grid[6]} onClick={() => this.handlebuttonClick(6)} />
                    <Tile value={this.state.grid[7]} onClick={() => this.handlebuttonClick(7)} />
                    <Tile value={this.state.grid[8]} onClick={() => this.handlebuttonClick(8)} />
                </div>
                <button onClick={this.restart}>New game</button>
            </div>
        )
    }

    handlebuttonClick(index){
        const tiles = this.state.grid.slice();
        this.setState({grid:tiles, xisNext: !this.state.xisNext})
        if(utils.winner(tiles) || tiles[index]){
            return
        }
        if(utils.full(tiles)){
            return
        }

        tiles[index] = this.state.xisNext ? 'x' : 'o';

    }

    restart(){
        this.setState(intialboard);
    }

}

export default Board;