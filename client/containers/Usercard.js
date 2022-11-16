import { StyleSheet, Text, View } from "react-native";
import Schemes from "../components/Schemes";
import Pocket from "../components/Pocket";
import Vouchers from "../components/Vouchers";

function Usercard(props) {
  return (
    <View
      style={{
        borderTopColor: "black",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: "white",
      }}
    >
      <Text>Loyalty Cards for {props.chainid}</Text>
      <Pocket pocket={props.pocket} />
      <Schemes schemes={props.schemes} />
      <Vouchers vouchers={props.vouchers} />
    </View>
  );
}

export default Usercard;
