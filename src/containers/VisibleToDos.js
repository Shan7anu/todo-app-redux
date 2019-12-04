import { connect } from 'react-redux';
import TodoList from '../components/ToDoList';
import { toggleToDo, deleteToDo } from '../actions';

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    toggleToDo: id => dispatch(toggleToDo(id)),
    deleteToDo: id => dispatch(deleteToDo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)