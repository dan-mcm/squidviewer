import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView } from "react-native";
import Usercard from "./containers/Usercard";
import { useState, useEffect } from "react";
import axios from "axios";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

function fetchSquidData(setSquidData) {
  // need to use local ip address of device hosting express server
  return axios
    .get(`http://192.168.1.14:3000/users/squiduser`)
    .then((res) => {
      return setSquidData(res.data);
    })
    .catch((err) => {
      console.log(err);
      return setSquidData([]);
    });
}

function filterData(squidData, setSquidData) {
  const sortedWallet = squidData.wallets.sort(
    (a, b) => b.vouchers.length - a.vouchers.length
  );
  const newDataObj = { wallets: sortedWallet };
  setSquidData(newDataObj);
}

export default function App() {
  const [squidData, setSquidData] = useState([]);
  const [voucherAscendingOrder, setVoucherAscendingOrder] = useState(false);

  useEffect(() => {
    fetchSquidData(setSquidData);
  }, []);

  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text
          style={{
            fontSize: "2em",
            padding: "1em",
            color: "white",
            backgroundColor: "black",
          }}
        >
          Squidviewer
        </Text>
        <Button
          title="Filter by total Vouchers"
          onPress={() => filterData(squidData, setSquidData)}
          color="secondary"
        />
        <StatusBar style="auto" />
        {squidData.length === 0 ? (
          <Text>"No Users Found"</Text>
        ) : (
          squidData.wallets.map((user) => (
            <Usercard
              key={user.chainId}
              chainid={user.chainId}
              pocket={user.pocket}
              schemes={user.schemes}
              vouchers={user.vouchers}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
  
    textAlign: "center",
  },
  text: {
    fontSize: 42,
  },
});
