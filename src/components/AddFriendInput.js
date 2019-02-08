import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render() {
    const { name, sex } = this.state;
    return (
      <div>
        <input
          type="text"
          name="name"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={name}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit} />
        <label className="radio-inline">
          <input type="radio" name="sex" value={'male'} checked={sex === 'male'} onChange={this.handleChange} />male
        </label>
        <label className="radio-inline">
          <input type="radio" name="sex" value={'female'} checked={sex === 'female'} onChange={this.handleChange} />female
        </label>
      </div>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      sex: 'male'
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    const { addFriend } = this.props;
    const { sex } = this.state;
    const name = e.target.value.trim();
    if (e.which === 13) {
      const friend = {
        id: name.trim().toLowerCase(),
        name,
        sex,
        starred: false
      }
      addFriend(friend);
      this.setState({ name: '', sex: 'male' });
    }
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
