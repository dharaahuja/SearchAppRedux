import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';

const SearchComponent = ({ fetchSearchResults, results, loading, error }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        fetchSearchResults(query);
    };

    return (
        <View>
            <View>
                <TextInput
                    
                    placeholder="Search ..."
                    value={query}
                    onChangeText={setQuery} />
                <Button title="Search" onPress={handleSearch} />
            </View>
            { loading && <ActivityIndicator />}
            { error ? (
                <Text>{error}</Text>
            ) : (
                <FlatList
                    data={results}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Text>{item.name}</Text>} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginRight: 10,
    },
});

export default SearchComponent;