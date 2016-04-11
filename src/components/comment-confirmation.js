import React from 'react';

export default class CommentConfirmation extends React.Component {
  constructor() {
    super();

    this.state = {
      showConfirm: false
    };
  }

  render() {

    let confirmNode;

    if (this.state.showConfirm) {
      confirmNode = (
        <span>
          <a href="" onClick={this._confirmAction.bind(this)}>Yes </a>
          <span> - or - </span>
          <a href="" onClick={this._toggleConfirmMessage.bind(this)}> No</a>
        </span>
      )
    } else {
      confirmNode = (
        <a href="" onClick={this._toggleConfirmMessage.bind(this)}>
          {this.props.children}
        </a>
      );
    }

    return (
      <div className="comment-confirm">
        {confirmNode}
      </div>
    );
  }

  _toggleConfirmMessage(e) {
    e.preventDefault();

    this.setState({
      showConfirm: !this.state.showConfirm
    });

  }

  _confirmAction(e) {
    e.preventDefault();
    this.props.onConfirm();

    // Returns to original state
    this.setState({
      showConfirm: false
    });
  }
}

CommentConfirmation.propTypes = {
  onConfirm: React.PropTypes.func.isRequired
}
