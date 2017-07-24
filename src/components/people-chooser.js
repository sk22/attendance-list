import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { person as personPropType } from '../prop-types'

class PeopleChooser extends Component {
  static propTypes = {
    ticked: PropTypes.objectOf(PropTypes.bool),
    people: PropTypes.objectOf(personPropType).isRequired,
    onChange: PropTypes.func.isRequired
  }
  static defaultProps = { ticked: {} }

  onChange = person => event =>
    this.props.onChange({ person, inList: event.target.checked })

  render = () =>
    <div>
      <ul>
        {Object.keys(this.props.people).map(id =>
          <li key={id}>
            {this.props.people[id].name}{' '}
            <input
              type='checkbox'
              onChange={this.onChange(id)}
              checked={this.props.ticked[id] || false}
            />
          </li>
        )}
      </ul>
    </div>
}

export default PeopleChooser
