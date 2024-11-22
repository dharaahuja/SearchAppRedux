import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import { TextInput, Button, Text, FlatList } from "react-native";
//import { fetchResults } from "./action";

const SearchView = () => {
    return (
        <>
            <TextInput />
            <Button title="Search"/>
            <FlatList
                data={["dhara"]}
                renderItem={({item}) => <Text>{item}</Text>} />
        </>
    )
};

export default SearchView;