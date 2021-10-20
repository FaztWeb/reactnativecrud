import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {Box, Text, Button, Flex, View, AlertDialog} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useTasks} from '../contexts/TaskContext';

const TaskCard = ({task}) => {
  const navigation = useNavigation();
  const {deleteTask} = useTasks();

  const handleDelete = () => {
    Alert.alert('Are you sure?', 'some message', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'OK',
        onPress: () => {
          deleteTask(task.id);
        },
      },
    ]);
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('TaskForm', {id: task.id})}>
      <Box bg="dark.100" marginBottom="2" padding="2">
        <Flex direction="row" justify="space-between" align="center">
          <View>
            <Text color="light.50">{task.title}</Text>
            <Text color="light.500">
              {task.description.length > 120
                ? `${task.description.substr(0, 120)}...`
                : `${task.description}`}
            </Text>
            <Text color="light.700" fontSize="xs">
              {task.id}
            </Text>
          </View>

          <Button bg="danger.700" onPress={handleDelete}>
            Delete
          </Button>
        </Flex>
      </Box>
    </TouchableOpacity>
  );
};

export default TaskCard;
