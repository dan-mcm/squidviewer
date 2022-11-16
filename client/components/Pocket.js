import { View, Image, Linking } from "react-native";
import { useState } from "react";
import { Button, Card, Text, SocialIcon, SocialIconProps } from "@rneui/themed";

function Pocket(props) {
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
        title={isVisible ? "Hide Pocket" : "Show Pocket"}
        onPress={() => setIsVisible(!isVisible)}
        color="secondary"
      />
      {isVisible ? (
        typeof props.pocket == "undefined" ? (
          <Card>
            <Card.Title>No Items in Pockets</Card.Title>
          </Card>
        ) : (
          <View style={{ textAlign: "left" }}>
            <Card>
              <Card.Title>{props.pocket.name}</Card.Title>
              <Card.Divider />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={{ uri: props.pocket.logoImage }}
                  style={{
                    width: 100,
                    height: 100,
                    textAlign: "center",
                    margin: "0.5em",
                  }}
                />
              </View>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Category:</Text>{" "}
                {props.pocket.category}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Address:</Text>{" "}
                {props.pocket.shortAddress}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Description:</Text>{" "}
                {props.pocket.description}
              </Text>
              <Text> </Text>
              <Card.Divider />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                {Object.entries(props.pocket.socialLinks).map((socialMedia) => (
                  // weird fault with this package locally, showing alternating icon backgrounds but not actual icons themselves...
                  // further debugging/swapping with another package can be done
                  <SocialIcon
                    key={socialMedia[0] + socialMedia[1]}
                    type={socialMedia[0]}
                    onPress={() => {
                      Linking.openURL(socialMedia[1]);
                    }}
                  />
                ))}
              </View>
            </Card>
          </View>
        )
      ) : null}
    </View>
  );
}

export default Pocket;
