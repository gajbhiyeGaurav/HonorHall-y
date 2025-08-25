import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import OnOffButton from '../../components/OnOffButton'; // Adjust the import path as necessary
import { router } from 'expo-router';

// Header Component
const Header: React.FC = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
      <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
    </TouchableOpacity>
    <Text style={styles.headerText}>Menu</Text>
    <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
      <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
    </TouchableOpacity>
  </View>
);

export default function Menu() {
  const [selectedValue, setSelectedValue] = useState('option1');

  const [isOn, setIsOn] = useState<boolean>(false);
  const toggleSwitch = () => setIsOn(prev => !prev);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      {/* Rest of your app goes here */}
      <ScrollView style={styles.scrollViewE}>
      <View style={styles.content}>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity style={styles.menuItem} >
          <Ionicons name="lock-closed" size={24} color="black" />
          <Text style={styles.menuText}>Official</Text>
          <OnOffButton />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} >
          <Ionicons name="chevron-forward" size={24} color="black" />
          <Text style={styles.menuText}>Private</Text>
          <OnOffButton />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} >
          <Ionicons name="chevron-forward" size={24} color="black" />
          <Text style={styles.menuText}>Background</Text>
          <OnOffButton />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} >
          <Ionicons name="chevron-forward" size={24} color="black" />
          <Text style={styles.menuText}>Text</Text>
          <OnOffButton />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} >
          <Ionicons name="chevron-forward" size={24} color="black" />
          <Text style={styles.menuText}>Profile</Text>
          <OnOffButton />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} >
          <Ionicons name="chevron-forward" size={24} color="black" />
          <Text style={styles.menuText}>Settings</Text>
          <OnOffButton />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} >
          <Ionicons name="chevron-forward" size={24} color="black" />
          <Text style={styles.menuText}>Followers</Text>
          <OnOffButton />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} >
          <Ionicons name="chevron-forward" size={24} color="black" />
          <Text style={styles.menuText}>Groups</Text>
          <OnOffButton />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} >
          <Ionicons name="chevron-forward" size={24} color="black" />
          <Text style={styles.menuText}>Sign Out</Text>
          <OnOffButton />
        </TouchableOpacity>
        <Text style={styles.title}>End</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingTop: 30,
    paddingBottom: 16,
    backgroundColor: '#6200ee',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    padding: 16,
    marginVertical: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%', 
  },
  menuText: {
    fontSize: 18,
  },
  scrollViewE: {
    alignContent: "center",
    // height: 'auto',
    padding: 10,
  },
});
