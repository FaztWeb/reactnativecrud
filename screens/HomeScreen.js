import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Fab, Box} from 'native-base';
import TaskCard from '../components/TaskCard';
import {useTasks} from '../contexts/TaskContext';
import Layout from '../components/Layout';

const HomeScreen = ({navigation}) => {
  const {tasks, getTasks} = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Layout>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TaskCard task={item} />}
      />
      <Fab
        position="absolute"
        size="sm"
        label="New Task"
        bg="blue.700"
        onPress={() => navigation.navigate('TaskForm')}
      />
    </Layout>
  );
};

export default HomeScreen;
