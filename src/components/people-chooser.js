import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { person as personPropType } from '../prop-types'

class PeopleChooser extends Component {
  onChoose = id => event => this.setState({ [id]: event.target.checked })
  static getTrue = state =>
    Object.keys(state).filter(key => Boolean(state[key]))

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    people: PropTypes.objectOf(personPropType).isRequired
  }

  render = () =>
    <div>
      <ul>
        {Object.keys(this.props.people).map(id =>
          <li>
            {this.props.people[id].name}{' '}
            <input type='checkbox' onChange={this.onChoose(id)} />
          </li>
        )}
      </ul>
      <button
        type='button'
        onClick={() => this.props.onSubmit(this.getTrue(this.state))}
      >
        Add
      </button>
    </div>
}

export default PeopleChooser
