import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
// import ReactTable from 'react-table';


const Currency = () => {
    const [ currency, setCurrency ] = useState({});

    //Memanggil API menggunakan UseEffect
    useEffect(() => {
        Axios.get(
            'https://api.currencyfreaks.com/latest?apikey=353a6d13ec224c7789b3ec97c17fa95b&symbols=CAD,IDR,JPY,CHF,EUR,GBP')
        .then((response) => setCurrency(response.data))
        }
    )
    
    //Mereturn object di API ke dalam table, lalu merubah string ke dalam number
    return (
        <>
        <table>
            <thead>
            <tr>
                <th>Currency</th>
                <th>We Buy</th>
                <th>Exchange Rate</th>
                <th>We Sell</th>
            </tr>
            </thead>
            <tbody>
            {Object.entries(currency.rates ?? {}).map(([key, value]) => (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{Math.round((parseFloat(value) + (parseFloat(value) * 5/100))*10000)/10000}</td>
                    <td>{Math.round((parseFloat(value))*1000000)/1000000}</td>
                    <td>{Math.round((parseFloat(value) - (parseFloat(value) * 5/100))*10000)/10000}</td>
                </tr>))}
            </tbody>
        </table>
        </>
    )


    }

export default Currency;