import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import  EvilIcons  from '@expo/vector-icons/EvilIcons';
import  SimpleLineIcons  from '@expo/vector-icons/SimpleLineIcons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Text, View } from '@/components/Themed';
import Avatar from '@/components/Reusables/ui/Avatar'
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof EvilIcons>['name'];
  color: string;
}) {
  return <EvilIcons size={28} style={{ marginBottom:2, paddingTop: 5 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          height: 62, 
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingBottom: 10, // Adjust the padding as needed
        },
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          
          tabBarIcon: ({ color }) => <TabBarIcon name="navicon" color={color} />,
          
          tabBarLabelStyle: {
            
            fontSize: 12, // Set the font size for the label specifically for this screen
          },
          headerLeft: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
<View>
<Avatar/>
</View>

                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <SimpleLineIcons
                    name="logout"
                    size={18}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Cards',
          tabBarIcon: ({ color }) => <TabBarIcon name="credit-card" color={color} />,
          tabBarLabelStyle: {

            fontSize: 12, // Set the font size for the label specifically for this screen
          },
        }}
      />

<Tabs.Screen
        name="history"
        options={{
          title: 'Payment',
          tabBarIcon: ({ color }) => <TabBarIcon name="link" color={color} />,
          tabBarLabelStyle: {

            fontSize: 12, // Set the font size for the label specifically for this screen
          },
        }}
      />

<Tabs.Screen
        name="cards"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <TabBarIcon name="redo" color={color} />,
                tabBarLabelStyle: {

        fontSize: 12, // Set the font size for the label specifically for this screen
      },

        }}
      />

<Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarLabelStyle: {

            fontSize: 12, // Set the font size for the label specifically for this screen
          },
        }}
      />
    </Tabs>
  );
}
