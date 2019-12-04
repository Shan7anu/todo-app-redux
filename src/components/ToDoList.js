import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const ToDoList = ({ todos, toggleToDo, deleteToDo }) => (
    <View style={{ padding: 20 }}>
        {todos.map(todo => {
            console.warn(todo.delete);
            if (!todo.delete) {
                return (
                    <TouchableOpacity key={todo.id} onPress={() => toggleToDo(todo.id)}>
                        <Text style={{
                            fontSize: 24,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                        }}>{todo.text}</Text>
                        <Icon size={25} name='cross' color='red' style={{ position: 'absolute', right: 0, padding: 10 }} onPress={() => deleteToDo(todo.id)} />
                    </TouchableOpacity>
                )
            }
        }
        )}
    </View>
)

export default ToDoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})