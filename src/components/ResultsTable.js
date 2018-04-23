import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';

export default class ResultsTable extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleClick = (row,column,event) => {
    console.log(row);
    console.log(column);
    console.log(event);
  }

  render() {

    const TbRow = ({row}) => (
      <TableRow onCellClick={this.handleClick}>
        <TableRowColumn style={{textAlign:'center'}}>{row.start_date}</TableRowColumn>
        <TableRowColumn style={{textAlign:'center'}}>{row.end_date}</TableRowColumn>
        <TableRowColumn style={{textAlign:'center'}}>{row.price}</TableRowColumn>
        <TableRowColumn style={{textAlign:'center'}}><a href={row.url}>Purchase</a></TableRowColumn>
      </TableRow>
    )

    const Tb = ({data}) => (
      <Table selectable={true} height={window.innerHeight-400}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Departure Date</TableHeaderColumn>
            <TableHeaderColumn>Return Date</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Link</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(row => {return <TbRow key={row.start_date} row={row} />})}
        </TableBody>
      </Table>
    )

    return (
      <Tb data={this.props.data} />
    )}
}