import { Tabs } from 'expo-router';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import HeaderBar from '../../components/HeaderBar';
import { replace } from 'expo-router/build/global-state/routing';
import { router } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'green', tabBarShowLabel: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: () => (
                        <HeaderBar
                            title="HonorHall"
                            leftIcon="menu"
                            onLeftPress={() => router.push("../(SubTabs)/menu") }
                            rightIcons={[
                                { name: 'search', onPress: () => router.push("../(SubTabs)/search") },
                                { name: 'create', onPress: () => router.push("../(SubTabs)/create") },
                            ]}
                        />
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabBarIcon
                            name='home'
                            focused={focused}
                            color={color}
                            size={size}
                        />
                        // <Feather name="home" size={size} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    headerTitle: () => (
                        <HeaderBar
                            title="Explore"
                            leftIcon="flame"
                            color="red"
                            onLeftPress={() => null }
                            rightIcons={[
                                { name: 'funnel', onPress: () =>  router.push("../(SubTabs)/filter") },
                                { name: 'heart-circle', onPress: () => router.push("../(SubTabs)/liked") },
                            ]}
                        />
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabBarIcon
                            name='compass'
                            focused={focused}
                            color={color}
                            size={size}
                        />
                        // <Feather name="compass" size={size} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    headerTitle: () => (
                        <HeaderBar
                            title="Notification"
                            leftIcon="flash"
                            color="green"
                            onLeftPress={() => null }
                            rightIcons={[
                                { name: 'search', onPress: () => router.push("../(SubTabs)/search") },
                                { name: 'notifications', onPress: () => router.push("../(SubTabs)/trending") },
                            ]}
                        />
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabBarIcon
                            name='bell'
                            focused={focused}
                            color={color}
                            size={size}
                        />
                        // <Feather name="bell" size={size} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="user"
                options={{
                    headerTitle: () => (
                        <HeaderBar
                            title="User"
                            leftIcon="person-circle"
                            onLeftPress={() => router.push("../(SubTabs)/userAccount") }
                            rightIcons={[
                                { name: 'pie-chart', onPress: () => router.push("../(SubTabs)/pieChart") },
                                { name: 'people-circle', onPress: () => router.push("../(SubTabs)/groups") },
                            ]}
                        />
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabBarIcon
                            name='user'
                            focused={focused}
                            color={color}
                            size={size}
                        />
                        // <Feather name="user" size={size} color={color}/>
                    ),
                }}
            />
        </Tabs>
    )
}
