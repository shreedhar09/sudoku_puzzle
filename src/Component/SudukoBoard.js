import React, { Component } from 'react'
import Square from "./Square";
import Grid from "./grid";

export default class SudukoBoard extends Component {
  
    render() {
        debugger
        console.log("qqqqqq ",this.props.puzzle);
        const grid = new Grid(this.props.puzzle);
    console.log("xxxxxx ",grid);
        return (
          <table className="sudoku">
            <tbody>
              {grid.rows.map((row, idx) => {
                return (
                  <tr key={idx}>
                    {row.map(cell => (
                      <td key={cell.col}>
                        <Square
                          value={cell.value}
                          row={cell.row}
                          col={cell.col}
                          onCellValueChange={this.props.onCellValueChange}
                        />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      }
}
