import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
    const [listOfArticles, setListOfArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/articles')
        .then((response) => {
          console.log(response.data);
          setListOfArticles(response.data);
        })
    }, []);

    return (
        <div className='App'>
          {listOfArticles.map((value, key) => {
            return (
              <div className='article'>
                <div className='title'>{value.title}</div>
                <div className='body'>{value.content}</div>
                <div className='footer'>{value.date}</div>
              </div>
            );
          })}
        </div>
      );
};

export default Home;