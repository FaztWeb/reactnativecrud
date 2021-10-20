import React, {useState, useEffect} from 'react';
import {useTasks} from '../contexts/TaskContext';
import {Text, Button, Input, TextArea} from 'native-base';
import Layout from '../components/Layout';

export const TaskFormScreen = ({navigation, route}) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const {createTask, tasks, updateTask} = useTasks();

  useEffect(() => {
    if (route.params?.id) {
      const taskIndex = tasks.findIndex(item => item.id === route.params.id);
      if (taskIndex > -1) {
        setTask(tasks[taskIndex]);
        navigation.setOptions({title: 'Update Task'});
      }
    }
  }, []);

  const handleClick = () => {
    if (route.params && route.params.id) {
      updateTask(task, route.params.id);
    } else {
      createTask(task);
    }
    navigation.navigate('TaskList');
  };

  const handleChange = (name, value) => setTask({...task, [name]: value});

  return (
    <Layout>
      <Text
        marginBottom="3"
        color="light.500"
        onPress={() => navigation.navigate('TaskList')}>
        Volver
      </Text>

      <Input
        placeholder="Write a title"
        onChangeText={text => handleChange('title', text)}
        value={task.title}
        marginBottom="3"
        bg="gray.900"
        color="white"
        borderColor="gray.700"
      />
      <TextArea
        placeholder="Write a title"
        name="description"
        onChangeText={text => handleChange('description', text)}
        value={task.description}
        marginBottom="3"
        bg="gray.900"
        color="white"
        borderColor="gray.700"
      />
      <Button
        onPress={handleClick}
        background={route.params?.id ? 'blue.700' : 'green.700'}>
        {route.params?.id ? 'Update' : 'Create'}
      </Button>
    </Layout>
  );
};

export default TaskFormScreen;
