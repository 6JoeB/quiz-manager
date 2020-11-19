import React, { Component } from 'react';
import axios from "axios";
import Parser from 'html-react-parser';

export default class QuizzesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizzes: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        await axios.get("/api/quizzes").then(response => {
            console.log(response.data.data);
            this.setState({
                quizzes: response.data.data,
                isLoading: false
            })
        });
    };

    render() {
        const { quizzes, isLoading } = this.state;
        
        let quizNames = quizzes.map(question => question.quiz);
        let filteredQuizNames = []
        quizNames.filter(function(value) {
            if (!filteredQuizNames.includes(value)) {
                filteredQuizNames.push(value)
            }
        })

        let quizNamesHTMLTable = `
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Quiz Name</th>
                    </tr>
                </thead>
                <tbody>
        `
        for (let i = 0; i < filteredQuizNames.length; i++) {
            quizNamesHTMLTable += `
                    <tr>${filteredQuizNames[i]}</tr>
                    `
        }

        quizNamesHTMLTable += `
                </tbody>
            </table>
        `
        console.log(quizNamesHTMLTable)
        return (
            <>
            <div id="quizNamesTable">
                {Parser(quizNamesHTMLTable)}
  
            </div>
            </>
            
        )
    }
}

// import React, { Component } from 'react';
// import ReactTable from 'react-table'
// import api from '../api';

// class QuizzesList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             quizzes: [],
//             columns: [],
//             isLoading: false
//         }
//     }

//     componentDidMount = async () => {
//         this.setState({ isLoading: true });

//         await api.getAllQuizzes().then(quizzes => {
//             this.setState({
//                 quizzes: quizzes.data.data,
//                 isLoading: false,
//             })
//         })
//     }

//     render() {
//         const { quizzes, isLoading } = this.state;
//         console.log('TCL: QuizzesList -> render -> quizzes', quizzes);

//         const columns = [
//             {
//                 Header: 'Quiz Name',
//                 accessor: 'quiz',
//                 filterable: true,
//             }
//         ]

//         let showTable = true;
//         if (!quizzes.length) {
//             showTable = false;
//         }

//         return (
//             <div>
//                 this is where the quizzes table should go {quizzes}
//               {showTable && (
//                   <ReactTable
//                   data={quizzes}
//                   loading={isLoading}
//                   columns={columns}
//                   defaultPageSize={10}
//                   showPageSizeOptions={true}
//                   minRows={0}
//                   />
//             )}  
//             </div>
            
//         )
//     }
// }

// export default QuizzesList;