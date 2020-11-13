import React, { Component } from 'react';
import ReactTable from 'react-table'
import api from '../api';

class QuizzesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizzes: [],
            columns: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });
        await api.getAllQuizzes().then(quizzes => {
            console.log("quizzes: " + quizzes);
            this.setState({
                quizzes: quizzes.data["data"],
                isLoading: false,
            })
            
        })
    }

    render() {
        const { quizzes, isLoading } = this.state;
        console.log('TCL: QuizzesList -> render -> quizzes', quizzes);

        const columns = [
            {
                Header: 'Quiz Name',
                accessor: 'quiz',
                filterable: true,
            }
        ]

        let showTable = true;
        if (!quizzes.length) {
            showTable = false;
        }

        return (
            <div>
                this is where the quizzes table should go {quizzes}
              {showTable && (
                  <ReactTable
                  data={quizzes}
                  loading={isLoading}
                  columns={columns}
                  defaultPageSize={10}
                  showPageSizeOptions={true}
                  minRows={0}
                  />
            )}  
            </div>
            
        )
    }
}

export default QuizzesList;