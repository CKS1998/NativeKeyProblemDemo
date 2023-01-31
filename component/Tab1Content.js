import { Text } from "react-native";

const Tab1Content = ({ route }) => {
  const count = route.params.count;
  return <Text>
    1111111 {"\n"}
    Tab 1 content, button count {count}
  </Text>
}

export default Tab1Content;