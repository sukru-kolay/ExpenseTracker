import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpenseItem from './ExpenseItem';

const renderExpenseItem = ({item}) => {
  return (
    <ExpenseItem
      id={item.id}
      description={item.description}
      amount={item.amount}
      date={item.date}
    />
  );
};
const ExpensesList = ({expenses}) => {
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
