import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToDo, deleteToDo, UpdateToDo} from '../Reducer/Todos/TodosAction';

export default function TodosComponents() {
  const [todos, setTodos] = useState('');
  const list = useSelector(state => state.TodosReducer.list);
  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add an Item"
        value={todos}
        onChangeText={e => setTodos(e)}
      />
      <Button
        onPress={() => {
          dispatch(addToDo(todos));
          setTodos('');
        }}
        title="Add!"
        color="coral"
      />
      {list.map(element => {
        return (
          <TouchableOpacity onPress={() => dispatch(deleteToDo(element.id))}>
            <View style={styles.item}>
              <TextInput
                style={styles.itemText}
                value={element.data}
                onChangeText={e => dispatch(UpdateToDo(element.id, e))}
              />
              <Text></Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginRight: 20,
  },
});
