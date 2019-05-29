import React,{Component,Fragment} from 'react';
require('./ListTable.css');

const userList = [
    {'id':1,'name':'tom','dept':'IT'},
    {'id':2,'name':'oom','dept':'IP'},
    {'id':3,'name':'pom','dept':'IC'},
    {'id':4,'name':'lom','dept':'IQ'},
    {'id':5,'name':'mom','dept':'IE'},
]
class ListTable extends Component{
    constructor(props){
        super(props);
        this.state={
            list:userList
        }
    }
    render(){
        const thList = 
        const trList = this.state.list.map((item,index)=>{
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.dept}</td>
                </tr>
            )
        });
        return (
            <Fragment>
                <table >
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trList}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default ListTable;