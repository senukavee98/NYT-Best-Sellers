import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './assets/CSS/BookDetail.css';
import BookDetail from './Components/BookDetail';
import 'antd/dist/antd.css';
import { Spin, Space } from 'antd';

const App = ()  => {

  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState();

  useEffect(() => {
      getBookData();
  },[])

  const getBookData = async() => {
      try {
          await axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kejAhwRat3GkPqI4tLiCaU2AHSzzfwYu")
          .then(res => {
              setBookData(res?.data?.results?.books)
              setLoading(false)
          })
      } catch (e) {
          console.log(e);
      }
  }


  return (
    <div className="books-outer-wrapper">
      <div>
        <h2> NYTimes Best Seller - Hardcover Fiction </h2>
        {
          loading ? (
            <Space size="middle">
            <Spin className="spinner" spinning={loading} />
        </Space>
          ) : (
            bookData?.map((book, index) => <BookDetail bookDetail={book} index={index}/>)
          )
        }
        
      </div>
    </div>
  );
}

export default App;
