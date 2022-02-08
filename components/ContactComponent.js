import React, { Component } from "react";
import { Card, Button, Icon } from "react-native-elements";
import { View, Text, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact",
  };

  sendEmail() {
    MailComposer.composeAsync({
      recepients: ["campsites@nucamp.com"],
      subject: "Inquiry",
      body: "To Whom it may concern:",
    });
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text>1 Nucamp Way</Text>
            <Text>Seattle, WA 98001</Text>
            <Text>U.S.A.</Text>

            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: campsites@nucamp.co</Text>
            <Button
              title="Send Email"
              buttonStyle={{ backgroundColor: "#5637DD", margin: 40 }}
              icon={
                <Icon
                  name="envelope-o"
                  type="font-awesome"
                  color="#ffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              onPress={() => this.sendEmail()}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}
export default Contact;
