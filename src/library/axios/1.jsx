import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosApp = () => {
    const [data, setData] = useState([]);
    const apiurl = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiurl);
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('error fetching data',error);
            }
        }
        fetchData()
    },[]);
  return (
    <>
     <h2>API Example</h2>
            {data.length === 100 ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading or Data Not Available</p>
            )}
    </>
  )
}

export default AxiosApp