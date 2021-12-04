
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input,Flex, NativeBaseProvider, IconButton, Icon, Box, Text,HStack,Center,Pressable, } from "native-base"
import { Feather } from "@expo/vector-icons"
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AppBar from './AppBar'

export default function App() {

  const [addTask,setAddTask] = useState([])
  const [addNewTask,setAddNewTask] = useState([])
  const [taskName,setTaskName] = useState('')
  const [selected, setSelected] = React.useState(1);



  const searchText = e => {
    setTaskName(e.target.value)
  }

  const addItem = () => {
    const newItem = [...addTask,taskName]
    setAddTask(newItem)
    alert('Added Successfully')
  }


  useEffect(()=>{
    setAddNewTask(addTask.filter(task => task.toLowerCase().includes(taskName.toLowerCase())))
  },[taskName])



console.log(addTask)

  return (
    <NativeBaseProvider>
      <AppBar/>
      <Flex
            direction="row"
            mb="2.5"
            mt="1.5"
            _text={{
              color: "coolGray.800",
            }}
          >
      <Input
            mx="3"
            placeholder="Input"
            onChange={searchText}
            w={{
              base: "80%",
              md: "25%",
            }}
          />
          <IconButton
                  tasknamederRadius="sm"
                  variant="solid"
                  icon={
                    <Icon as={Feather} name="plus" size="sm" color="warmGray.50" />
                  }
                  onPress={addItem}
                />
          </Flex>
       <Box mx="5">
         {
           addNewTask.map(task => <Text fontSize="2xl">{task}</Text>)
         }
       </Box>
       <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}></Center>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}>
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? 'home' : 'home-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? 'cart' : 'cart-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" font="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? 'account' : 'account-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
