import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { person as personPropType } from '../prop-types'

class PeopleChooser extends Component {
  onChoose = id => event => this.setState({ id: event.target.checked })
  render () {
    return (
      <div>
        <ul>
          {Object.keys(this.props.people).map(id =>
            <li>
              {this.props.people[id].name}{' '}
              <input type='checkbox' onChange={this.onChoose(id)} />
            </li>
          )}
        </ul>
        {/* TODO: filter; only true values */}
        <button type='button' onClick={() => this.props.onSubmit(this.state)}>
          Add
        </button>
      </div>
    )
  }
}

PeopleChooser.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  people: PropTypes.objectOf(personPropType).isRequired
}

export default PeopleChooser
