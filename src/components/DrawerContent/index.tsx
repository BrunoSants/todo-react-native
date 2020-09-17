import React from 'react';
import { View } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';

import { Avatar, Title, Caption, Drawer } from 'react-native-paper';

// import { MaterialCommunityIcons } from '@expo/vector-icons';

const DrawerContentMenu: React.FC<DrawerContentComponentProps> = (
    props: DrawerContentComponentProps,
) => {
    const { navigation } = props;
    return (
        <DrawerContentScrollView>
            <View
                style={{
                    flex: 1,
                }}
            >
                <View style={{ paddingLeft: 20, marginTop: 10 }}>
                    <Avatar.Image
                        source={{
                            uri:
                                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                        }}
                        size={50}
                    />
                    <Title style={{ marginTop: 20, fontWeight: 'bold' }}>
                        Dawid Urbaniak
                    </Title>
                    <Caption style={{ fontSize: 14, lineHeight: 14 }}>
                        @trensik
                    </Caption>
                </View>
                <Drawer.Section accessibilityStates style={{ marginTop: 15 }}>
                    <Drawer.Item
                        icon="home-outline"
                        label="Criar Tarefa"
                        onPress={() => navigation.navigate('CreateTask')}
                    />
                    <Drawer.Item
                        icon="bookmark-outline"
                        label="Listar Tarefas"
                        onPress={() => navigation.navigate('ToDoList')}
                    />
                    <Drawer.Item
                        icon="account-outline"
                        label="Profile"
                        onPress={() => navigation.navigate('Profile')}
                    />
                    <Drawer.Item
                        icon="exit-to-app"
                        label="Sair"
                        onPress={() => console.log('profile')}
                    />
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    );
};

export default DrawerContentMenu;

/*
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
*/
