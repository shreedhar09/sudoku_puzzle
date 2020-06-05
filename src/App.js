import React,{Component} from 'react';
import Grid from "./Component/grid";
import Solver from "./Component/solver";
import SudukoBoard from "./Component/SudukoBoard";


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { puzzle: this.props.puzzle };
  }

  solve() {
    const { puzzle } = this.state,
      grid = new Grid(puzzle);
     
    new Solver(grid).solve();
    this.setState({ puzzle: grid.toFlatString() });
  }

  onCellValueEdited(row, col, value) {
    const grid = new Grid(this.state.puzzle);

    grid.rows[row][col].value = value;
    // update the state with the new puzzle string
    this.setState({ puzzle: grid.toFlatString() });
  }

  
  clearAll() {
    this.setState({ puzzle: this.props.puzzle });
  }

  render() {
    return (
      <div className="game">
        <h1 className="headerName">Sudoku Puzzle</h1>
        <SudukoBoard

           puzzle={this.state.puzzle}
           onCellValueChange={this.onCellValueEdited.bind(this)}
        />
        <div className="buttons">
          <button onClick={() => this.solve()}>Solve It!</button>
          <button onClick={() => this.clearAll()}>Clear</button>
        </div>
      </div>
    );
  }
}


export default App;
