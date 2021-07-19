import trackerApi from '../api/tracker'
import {useState} from 'react'

export default () => {
    const [searchedNotes, setSearchedNotes] = useState([])

    const findSearchedNotes = async (searchData) => {
        try {
            const response = await trackerApi.post('/search', searchData)
            setSearchedNotes(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return [findSearchedNotes, searchedNotes]
}