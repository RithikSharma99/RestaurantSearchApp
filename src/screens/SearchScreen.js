import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen =() => {

	const [term, setTerm] = useState('');
	const[searchApi, results, errorMessage]  = useResults();
	
	const filterresultsByPrice =(price) => {
		return results.filter(result => {
			return result.price === price;
		});
	} ;


	return(
	 <>
	 <SearchBar 
	 term ={term} 
	 onTermChange = {setTerm}
	 onTermSubmit= {() => searchApi(term)}
	 />
	{errorMessage ? <Text>{errorMessage} </Text> : null}
	<ScrollView>
	<ResultsList results = {filterresultsByPrice('$')}  title = "Cost Effective" />
	<ResultsList results = {filterresultsByPrice('$$')} title = "Bit Pricier"  />
	<ResultsList results = {filterresultsByPrice('$$$')} title = "Bit Spender" />
	</ScrollView>
	</>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;