import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Mug} from '.'
import {getAllMugsThunk} from '../store/allMugs'
import {
  Container,
  Row,
  Col,
  CardGroup,
  CardDeck,
  Card,
  Pagination,
  PageItem
} from 'react-bootstrap'
class AllMugs extends Component {
  componentDidMount() {
    this.props.loadMugs()
  }

  render() {
    const {mugs} = this.props
    return mugs === undefined || !mugs.length ? (
      <h1>Loading mugs...</h1>
    ) : (
      <React.Fragment>
        <h3>Which Mug Will You Chug?</h3>

        <div id="mug-list">
          {/* <CardDeck> */}
          {mugs.map(mug => (
            // <Card>

            <Mug key={mug.id} {...mug} />
          ))}
          {/* </CardDeck> */}
        </div>
      </React.Fragment>
    )
  }
}

const mapState = state => {
  return {
    mugs: state.allMugs
  }
}

const mapDispatch = dispatch => {
  return {
    loadMugs() {
      dispatch(getAllMugsThunk())
    }
  }
}

export default connect(mapState, mapDispatch)(AllMugs)

AllMugs.propTypes = {
  mugs: PropTypes.array.isRequired,
  loadMugs: PropTypes.func.isRequired
}
