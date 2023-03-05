import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import BookList from './BookList';
import Pagination from './Pagination';
import Search from './Search';



export default function SearchBook(){
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [search, setSearch] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    useEffect(()=>{
        setLoading(true);
        axios.get("https://openlibrary.org/search.json?author=tolkien&sort=new")
        .then((response)=>{
            setBooks(response.data);
        })
        .then(()=>setLoading(false));
        //console.log(books.docs)
        
    },[])

  //  console.log(books.docs.length);

    const searchHandler = (search)=>{
        setSearch(search);
        if(search !== ''){
            const newBookList = books.docs.filter((item)=>{
                return Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase());
            })
            setSearchResults(newBookList);
        }else{
            setSearchResults(books.docs);
        }
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage+1;
    const allBooks = searchResults?.slice(indexOfFirstPost, indexOfLastPost+1);
    const currentBooks = books.docs?.slice(indexOfFirstPost, indexOfLastPost+1);
   // console.log(indexOfFirstPost, indexOfLastPost )

    const paginate = page=>setCurrentPage(page);

    return(
        <div className='container mt-5'>
            <Search tmp={search} searchKeyword={searchHandler}/>
            <BookList loading={loading} books = {currentBooks} completeList = {allBooks} search={search}/>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={searchResults.length || 100}
                paginate={paginate}
            />
            <p>Note:-Latest and last published are shown same because it is given in the api as well.</p>
        </div>
    )

}