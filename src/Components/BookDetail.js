import React, { useEffect, useState } from 'react';
import "../assets/CSS/BookDetail.css"


const BookDetail = ({ bookDetail, index }) => {
    return (
        <>
            <div className="book-inner-wrapper">
                <div key={bookDetail.primary_isbn10}>
                    <div className="flex-container">
                        <div style={{"flexBasis": "110px"}}>
                            <img src={bookDetail.book_image} alt="book 01" className="img" />
                         </div>
                         <div style={{"flexBasis": "1140px"}}>
                            <span className="book-title"> #{index + 1} {bookDetail.title}  </span>
                            <span className="book-author"> {bookDetail.author} </span>
                            <span className="book-Description"> {bookDetail.description} </span>
                            <a href={bookDetail.book_review_link} rel="noreferrer" target="_blank">
                                <button disabled={bookDetail.book_review_link === "" ? true : false} className="btn-review"> 
                                    Read Full Review              
                                </button>
                            </a> 

                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </>
    );
}


export default BookDetail;