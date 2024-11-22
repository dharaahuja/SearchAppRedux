import axios from 'axios';

export interface SearchResult {
    id: number;
    name: string;
}
export const fetchSearchResults = async (query: string): Promise<SearchResult[]> => { 
    try { 
        const response = await axios.get(`https://reactnative.dev/movies.json`); 
        return response.data; 
    } catch (error) { 
        console.error("Error fetching data:", error); 
        throw error; 
    } 
};
