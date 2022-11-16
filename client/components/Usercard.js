import { StyleSheet, Text, View } from "react-native";
import Schemes from "./Schemes";
import Pocket from "./Pocket";

function Usercard(props) {
  return (
    <View>
      <Text>Users Card</Text>
      <Text>Chainid: {JSON.stringify(props.chainid)}</Text>
      <Text>Pocket</Text>
      <Pocket pocket={props.pocket} />
      <Text>Schemes</Text>
      <Schemes schemes={props.schemes} />
      <Text>Vouchers: {JSON.stringify(props.vouchers)}</Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    </View>
  );
}

export default Usercard;
