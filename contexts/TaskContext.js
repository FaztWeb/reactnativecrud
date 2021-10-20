import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import React from 'react';
import {createContext, useState, useContext, useEffect} from 'react';
import uuid from 'react-native-uuid';

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within a TaskProvider');
  return context;
};

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);

  const storeTasks = async () => {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
    } catch (error) {
      Alert.alert('Error', 'Error storing tasks');
    }
  };

  const getTasks = async () => {
    if (AsyncStorage.getItem('@tasks')) {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      setTasks(JSON.parse(storedTasks));
    }
  };

  useEffect(() => {
    console.log('called')
    storeTasks();
  }, [tasks]);

  const createTask = task => setTasks([...tasks, {...task, id: uuid.v4()}]);

  const updateTask = (task, id) =>
    setTasks(tasks.map(t => (t.id === id ? task : t)));

  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));

  return (
    <TaskContext.Provider
      value={{tasks, getTasks, createTask, deleteTask, updateTask}}>
      {children}
    </TaskContext.Provider>
  );
};
