import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";

function Vouchers(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5em",
      }}
    >
      <Button
        title={isVisible ? "Hide Vouchers" : "Show Vouchers"}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible ? (
        typeof props.vouchers == "undefined" || props.vouchers.length === 0 ? (
          <Text>No Vouchers</Text>
        ) : (
          props.vouchers.map((voucher) => (
            <View>
              <Text>Voucher ID: {voucher.voucherId}</Text>
              <Text>Voucher Category: {voucher.category}</Text>
              <Text>Voucher Name: {voucher.name}</Text>
            </View>
          ))
        )
      ) : null}
    </View>
  );
}

export default Vouchers;
