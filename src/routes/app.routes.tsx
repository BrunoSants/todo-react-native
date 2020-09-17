import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateTask from '../pages/CreateTask';
import ToDoList from '../pages/ToDoList';
import DrawerContent from '../components/DrawerContent';
import Profile from '../pages/Profile';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const CreateTaskStack: React.FC = ({ navigation }: any) => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen
            name="CreateTask"
            component={CreateTask}
            options={{
                title: 'Criar Tarefa',
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        size={25}
                        backgroundColor="#009387"
                        onPress={() => navigation.openDrawer()}
                    />
                ),
            }}
        />
    </Stack.Navigator>
);

const ProfileStack: React.FC = ({ navigation }: any) => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
                title: 'Profile',
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        size={25}
                        backgroundColor="#009387"
                        onPress={() => navigation.openDrawer()}
                    />
                ),
            }}
        />
    </Stack.Navigator>
);

const ToDoListStack: React.FC = ({ navigation }: any) => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen
            name="ToDoList"
            component={ToDoList}
            options={{
                title: 'Lista de Tarefas',
                headerLeft: () => (
                    <Icon.Button
                        name="ios-menu"
                        size={25}
                        backgroundColor="#009387"
                        onPress={() => navigation.openDrawer()}
                    />
                ),
            }}
        />
    </Stack.Navigator>
);

const AppDrawerNavigation: React.FC = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="CreateTask" component={CreateTaskStack} />
            <Drawer.Screen name="ToDoList" component={ToDoListStack} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
        </Drawer.Navigator>
    );
};

const AppStackNavigation: React.FC = () => (
    <NavigationContainer>
        <Stack.Navigator mode="card" headerMode="none" initialRouteName="App">
            <Stack.Screen name="Apṕ" component={AppDrawerNavigation} />
        </Stack.Navigator>
    </NavigationContainer>
);
export default AppStackNavigation;
