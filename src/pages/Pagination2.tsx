import React from 'react'
import styled from 'styled-components';

interface books {
    postsPerPage: any;
    totalPosts: any;
    paginate: any;
}

const Pagination2:React.FC<books> = ({postsPerPage, totalPosts, paginate, }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++)  {
        pageNumbers.push(i)
    }
  return (
    <nav>
        <Page>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                

                
                 <li key={number} className="page-item">
                     <B><a onClick={() => paginate(number)}  className='page-link'>
                         {number}
                     </a></B>
                 </li>
            
            ))}
        </ul>
    </Page>
    </nav>
  )
}

export default Pagination2

const B = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color: #242424;
    }
`

const Page = styled.div`
/* background-color: yellow; */
display: flex;
color: white;
    ul{
        text-decoration: none;
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;

    }
 li{
    text-decoration: none;
    color: white;
    margin: 5px;
 }
 a{
    text-decoration: none;
    color: white;
 }
`