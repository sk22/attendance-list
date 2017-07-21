import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { generate } from 'shortid'

import { setPerson } from '../actions'

class AddPerson extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  }

  state = { name: '' }

  onChangeName = event => this.setState({ name: event.target.value })

  render = () => (
    <div>
      <input type="text" name="name" onChange={this.onChangeName} />
      <button
        type="button"
        onClick={() => this.props.onAdd({ name: this.state.name })}
      >Add</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onAdd: person =>
    person.name && dispatch(setPerson({ id: generate(), person }))
})

export default connect(null, mapDispatchToProps)(AddPerson)
