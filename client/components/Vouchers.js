import { View } from "react-native";
import { useState } from "react";
import { Button, Text, Card } from "@rneui/themed";

function Vouchers(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5em",
      }}
    >
      <Button
        title={isVisible ? "Hide Vouchers" : "Show Vouchers"}
        onPress={() => setIsVisible(!isVisible)}
        color="secondary"
      />
      {isVisible ? (
        typeof props.vouchers === "undefined" || props.vouchers.length === 0 ? (
          <Card>
            <Card.Title>No Vouchers</Card.Title>
          </Card>
        ) : (
          props.vouchers.map((voucher) => (
            <View key={voucher.name + voucher.Id}>
              <Card>
                <Card.Title>🎟️ {voucher.name} 🎟️</Card.Title>
                <Card.Divider />
                <Text>Category: {voucher.category}</Text>
                <Text>ID: {voucher.voucherId}</Text>
              </Card>
            </View>
          ))
        )
      ) : null}
    </View>
  );
}

export default Vouchers;
