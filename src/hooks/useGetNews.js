import trackerApi from '../api/tracker'
import {useState} from 'react'

export default () => {
    const [news, setNews] = useState([])

    const findNews = async () => {
        try {
            const response = await trackerApi.get('/news')
            setNews(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return [findNews, news]
}