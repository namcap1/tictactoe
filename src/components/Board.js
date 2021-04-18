import React, {Component} from 'react';
import * as utils from '../utils/findwinner';
import Tile from './tile';
import './Board.css'


class Board extends Component{
    constructor(props){
        super(props);
        this.state = utils.intialboard;
        this.restart = this.restart.bind(this);
        this.backintime = this.backintime.bind(this);
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
        const moves = [];
        for(let i =1; i<this.state.history.length; i++){
            moves.push(<button key={i} onClick={() => this.backintime(this.state.history[i], i)}>Move {i}</button>)
        }
        return(
            <div>
                <h1>Tic Tac Toe</h1>
                <p>{status}</p>
                <div className='board'>
                    <div className='board-row'>
                        <Tile value={this.state.grid[0]} onClick={() => this.handlebuttonClick(0)} />
                        <Tile value={this.state.grid[1]} onClick={() => this.handlebuttonClick(1)} />
                        <Tile value={this.state.grid[2]} onClick={() => this.handlebuttonClick(2)} />
                    </div>
                    <div className='board-row'>
                        <Tile value={this.state.grid[3]} onClick={() => this.handlebuttonClick(3)} />
                        <Tile value={this.state.grid[4]} onClick={() => this.handlebuttonClick(4)} />
                        <Tile value={this.state.grid[5]} onClick={() => this.handlebuttonClick(5)} />
                    </div>
                    <div className='board-row'>
                        <Tile value={this.state.grid[6]} onClick={() => this.handlebuttonClick(6)} />
                        <Tile value={this.state.grid[7]} onClick={() => this.handlebuttonClick(7)} />
                        <Tile value={this.state.grid[8]} onClick={() => this.handlebuttonClick(8)} />
                    </div>
                </div>
                <button onClick={this.restart}>New game</button>
                <div>
                   {moves}
                </div>
            </div>
        )
    }

    handlebuttonClick(index){
        const tiles = this.state.grid.slice();
        this.setState({grid:tiles});
        if(utils.winner(tiles) || tiles[index]){
            return
        }
        if(utils.full(tiles)){
            return
        }
        if(tiles[index] === null){
            tiles[index] = this.state.xisNext ? 'x' : 'o';
            let his = this.state.history;
            his.push(this.state.grid);
            this.setState({xisNext:!this.state.xisNext, history: his, move: this.state.move++});
        }
    }

    restart(){
        window.location.reload(false);
    }

    backintime(move, index){
        let revert = this.state.history.slice(0, index)
        this.setState({grid: move, history: revert})
    }

}

export default Board;