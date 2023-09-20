import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const renderExpenseItem = ({item}) => {
  return (
    <View>
      <Text>{item.description}</Text>
      {/* <Text>{item.date}</Text> */}
      <Text>{item.amount}</Text>
    </View>
  );
};
const ExpensesList = ({expenses}) => {
  console.log(expenses);
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
