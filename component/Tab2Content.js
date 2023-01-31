import { Text } from "react-native";

const Tab2Content = ({ route }) => {
  const count = route.params.count;
  return <Text>
    2222222222222 {"\n"}
    2222222222222 {"\n"}
    Tab 2 content, button count {count}
  </Text>
}

export default Tab2Content;