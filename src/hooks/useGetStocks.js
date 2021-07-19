import trackerApi from '../api/tracker'
import {useState} from 'react'

export default () => {
    const [stocks, setStocks] = useState({
        kse100:{
            historic: [0]
        },
        allshr:{
            historic: [0]
        },
        kse30:{
            historic: [0]
        },
        ogti:{
            historic: [0]
        },
        dow: {
            historic: [0]
        },
        nasdaq: {
            historic: [0]
        },
        snp500: {
            historic: [0]
        },
        ftse100: {
            historic: [0]
        },
        ftse250: {
            historic: [0]
        },
        ftse350: {
            historic: [0]
        },
        ftseallshr: {
            historic: [0]
        },
        nikkei225: {
            historic: [0]
        },
        asiadow: {
            historic: [0]
        },
        shiller: {
            historic: [0]
        }
    })

    const findStocks = async (countryName) => {
        try {
            const response = await trackerApi.get(`/${countryName}`)
            setStocks(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return [findStocks, stocks]
}