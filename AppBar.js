import React from "react";
import { HStack, IconButton, Icon, Text, Box, StatusBar, Menu, Divider, HamburgerIcon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from "react-native";

const AppBar = () => {
    return (
        <>
            <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
    
            <Box safeAreaTop backgroundColor="#6200ee" />
    
            <HStack bg='#6200ee' px="1" py="3" justifyContent='space-between' alignItems='center'>
              <HStack space="4" alignItems='center'>
              <Menu
        w="190"
        closeOnSelect={false}
        onOpen={() => console.log("opened")}
        onClose={() => console.log("closed")}
        trigger={(triggerProps) => {
          return (
            <Pressable {...triggerProps}>
              <HamburgerIcon />
            </Pressable>
          )
        }}
      >
        <Menu.Group title="Free">
          <Menu.Item>Arial</Menu.Item>
          <Menu.Item>Nunito Sans</Menu.Item>
          <Menu.Item>Roboto</Menu.Item>
        </Menu.Group>
        <Divider mt="3" w="100%" />
        <Menu.Group title="Paid">
          <Menu.Item>SF Pro</Menu.Item>
          <Menu.Item>Helvetica</Menu.Item>
        </Menu.Group>
      </Menu>
                <Text color="white" fontSize="20" fontWeight='bold'>Home</Text>
              </HStack>
              <HStack space="2">
                <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
                <IconButton icon={<Icon as={<MaterialIcons name='search' />}
                color="white" size='sm'  />} />
                <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
              </HStack>
            </HStack>
    
        </>
      )
};

export default AppBar;