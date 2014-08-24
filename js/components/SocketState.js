/**
 * @jsx React.DOM
 */

var React = require('react');
var SocketStore = require('../stores/SocketStore');

var SocketState = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  _onChange: function() {
    this.setState({
      count: SocketStore.getCount()
    });
  },
  render: function() {
    return <div className="socket-state">{this.state.count}</div>;
  },
  componentDidMount: function() {
    SocketStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    SocketStore.removeChangeListener(this._onChange);
  }
});

module.exports = SocketState;