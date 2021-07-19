import trackerApi from '../api/tracker'
import {useState} from 'react'

export default () => {
    const [recentNotes, setRecentNotes] = useState([])

    const findRecentNotes = async () => {
        try {
            const response = await trackerApi.get('/getrecent')
            setRecentNotes(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return [findRecentNotes, recentNotes]
}