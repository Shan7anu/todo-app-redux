import { connect } from 'react-redux';
import TodoList from '../components/ToDoList';
import  { toggleToDo } from '../actions';

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    toggleToDo: id => dispatch(toggleToDo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)