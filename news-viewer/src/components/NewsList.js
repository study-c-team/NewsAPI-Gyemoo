import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem"

const NewsItemBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px:
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        wdith: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title: '제목',
    description: '내용', 
    url: 'https://google.com', 
    urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = () => {
    return (
        <NewsItemBlock>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
            <NewsItem article={sampleArticle}/>
        </NewsItemBlock>
    );
};

export default NewsList;