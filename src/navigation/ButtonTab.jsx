import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  HomeIcon,
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
} from '../../public/assets/tab_icons';
import {KeepIcon} from '../../public/assets/icons';

function ButtonTab({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 4,
              backgroundColor: isFocused ? '#ebebeb' : '#fff',
              borderBottomWidth: 1,
              borderBottomColor: isFocused ? '#673ab7' : '#fff',
            }}>
            {/* ini buat icon, disini menggunakan TERNARY OPERATOR. Bisa pake if else */}
            {route.name === 'Home' ? (
              <HomeIcon />
            ) : route.name === 'Keep' ? (
              <KeepIcon />
            ) : route.name === 'Notification' ? (
              <NotificationIcon />
            ) : route.name === 'Profile' ? (
              <ProfileIcon />
            ) : null}
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default ButtonTab;
