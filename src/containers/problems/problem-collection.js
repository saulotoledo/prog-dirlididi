import React, { Component } from 'react';
import { Button, PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

import { HEADERS_TABLE_CONFIG, TABLE_CONFIG, URLS } from '../../constants/problem-constants';
import * as problemAction from '../../actions/problem';
import Spinner from '../../components/spinner/spinner';
import Table from '../../components/table/table';
import './style/problems.css';

class ProblemCollection extends Component {
  render () {
    if (this.props.isLoading) {
      return <Spinner />;
    }

    return (
      <div className='problems-container'>
        <PageHeader>
          Problems
        </PageHeader>
        <div id='add-problem-div'>
          <Button bsStyle='primary' href={URLS.addProblem}>Add Problem</Button>
        </div>
        <Table
          tableConfig={TABLE_CONFIG}
          headersConfig={HEADERS_TABLE_CONFIG}
          data={this.props.problems} />
      </div>
    );
  }

  componentDidMount () {
    this.props.onInitProblems();
  }
}

const mapStateToProps = state => (
  {
    problems: state.problemReducer.problems,
    isLoading: state.problemReducer.isLoading
  }
);

const mapDispatchToProps = dispatch => (
  {
    onInitProblems: () => dispatch(problemAction.initProblems())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProblemCollection);
