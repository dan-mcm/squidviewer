import { StyleSheet, View } from "react-native";
import Schemes from "../components/Schemes";
import Pocket from "../components/Pocket";
import Vouchers from "../components/Vouchers";

import { Card, Text } from "@rneui/themed";

function Usercard(props) {
  return (
    <Card>
      <Card.Title>{props.chainid} Card</Card.Title>
      <Card.Divider />
      <Pocket pocket={props.pocket} />
      <Schemes schemes={props.schemes} />
      <Vouchers vouchers={props.vouchers} />
    </Card>
  );
}

export default Usercard;
