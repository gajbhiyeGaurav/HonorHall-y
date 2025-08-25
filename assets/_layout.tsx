// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Drawer } from 'expo-router/drawer';
// import { View, Text, Button, TouchableOpacity } from 'react-native';
// import { replace } from 'expo-router/build/global-state/routing';
// import HeaderBar from '../../components/HeaderBar';
// import { DrawerToggleButton } from "@react-navigation/drawer";
// import React from 'react';
// import { router } from 'expo-router';

// export default function Layout() {
//     return (
//         <GestureHandlerRootView style={{ flex: 1 }}>
//             <Drawer
//                 screenOptions={{
//                     drawerActiveTintColor: 'green',
//                     drawerHideStatusBarOnOpen: true,
//                 }}
//             >
//                 <Drawer.Screen
//                     name="userAccount" // This is the name of the page and must match the url from root
//                     options={{
//                         drawerLabel: 'User Account',
//                         title: 'User Account',
//                         headerShown: true,
//                         headerRight: () => (
//                             <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
//                                 <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
//                             </TouchableOpacity>
//                         )
//                     }}
//                 />
//                 <Drawer.Screen
//                     name="groups" // This is the name of the page and must match the url from root
//                     options={{
//                         drawerLabel: 'Groups',
//                         title: 'Groups',
//                         headerShown: true,
//                         headerRight: () => (
//                             <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
//                                 <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
//                             </TouchableOpacity>
//                         )
//                     }}
//                 />
//                 <Drawer.Screen
//                     name="search" // This is the name of the page and must match the url from root
//                     options={{
//                         drawerLabel: 'Search',
//                         title: 'Search',
//                         headerShown: true,
//                         headerRight: () => (
//                             <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
//                                 <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
//                             </TouchableOpacity>
//                         )
//                     }}
//                 />
//                 <Drawer.Screen
//                     name="create" // This is the name of the page and must match the url from root
//                     options={{
//                         drawerLabel: 'Create',
//                         title: 'Create',
//                         headerShown: true,
//                         headerRight: () => (
//                             <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
//                                 <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
//                             </TouchableOpacity>
//                         )
//                     }}
//                 />
//                 <Drawer.Screen
//                     name="liked" // This is the name of the page and must match the url from root
//                     options={{
//                         drawerLabel: 'Liked',
//                         title: 'Liked',
//                         headerShown: true,
//                         headerRight: () => (
//                             <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
//                                 <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
//                             </TouchableOpacity>
//                         )
//                     }}
//                 />
//                 <Drawer.Screen
//                     name="filter" // This is the name of the page and must match the url from root
//                     options={{
//                         drawerLabel: 'Filter',
//                         title: 'Filter',
//                         headerShown: true,
//                         headerRight: () => (
//                             <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
//                                 <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
//                             </TouchableOpacity>
//                         )
//                     }}
//                 />
//                 <Drawer.Screen
//                     name="trending" // This is the name of the page and must match the url from root
//                     options={{
//                         drawerLabel: 'Trending',
//                         title: 'Trending',
//                         headerShown: true,
//                         headerRight: () => (
//                             <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
//                                 <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
//                             </TouchableOpacity>
//                         )
//                     }}
//                 />
//                 <Drawer.Screen
//                     name="pieChart" // This is the name of the page and must match the url from root
//                     options={{
//                         drawerLabel: 'PieChart',
//                         title: 'PieChart',
//                         headerShown: true,
//                         headerRight: () => (
//                             <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
//                                 <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
//                             </TouchableOpacity>
//                         )
//                     }}
//                 />
//             </Drawer>
//         </GestureHandlerRootView>
//     );
// }
