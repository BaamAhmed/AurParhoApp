import trackerApi from '../api/tracker'
import {useState} from 'react'

export default () => {
    const [Announcements, setAnnouncements] = useState([])

    const findAnnouncements = async () => {
        try {
            const response = await trackerApi.get('/getannouncements')
            setAnnouncements(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return [findAnnouncements, Announcements]
}