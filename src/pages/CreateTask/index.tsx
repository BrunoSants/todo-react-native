import React, { useState, useCallback } from 'react';
import { View, Button, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { Fumi } from 'react-native-textinput-effects';

const HomeStack = createStackNavigator();

type AndroidMode = 'date' | 'time';

const CreateTask: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date(Date.now()));
    const [mode, setMode] = useState<AndroidMode>('date');
    const [show, setShow] = useState(false);

    const onChange = useCallback(
        (event: Event, selectedDate: Date | undefined): void => {
            const currentDate = selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
        },
        [date],
    );

    const showMode = (currentMode: any): void => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = (): void => {
        showMode('date');
    };

    const showTimepicker = (): void => {
        showMode('time');
    };

    return (
        <View>
            <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
            </View>
            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
                <Text>Data: {date.toLocaleDateString()}</Text>
                <Text>Hora: {date.toLocaleTimeString()}</Text>
                <Fumi
                    label="Titulo"
                    iconClass={FontAwesomeIcon}
                    iconName="university"
                    iconColor="#f95a25"
                    iconSize={20}
                    inputPadding={16}
                />
                <Fumi
                    label="Descrição"
                    iconClass={FontAwesomeIcon}
                    iconName="university"
                    iconColor="#f95a25"
                    iconSize={20}
                    inputPadding={16}
                />
            </View>
            {show && (
                <DateTimePicker
                    minimumDate={new Date(Date.now())}
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour
                    display="default"
                    onChange={onChange}
                    locale="pt-BR"
                />
            )}
        </View>
    );
};

const CreateTaskScreen: React.FC = ({ navigation }: any) => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#009387',
                },
                headerTintColor: '#fff',
            }}
        >
            <HomeStack.Screen
                name="CreateTaskScreen"
                component={CreateTask}
                options={{
                    headerLeft: () => (
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            backgroundColor="#1f65ff"
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                }}
            />
        </HomeStack.Navigator>
    );
};

export default CreateTask;
