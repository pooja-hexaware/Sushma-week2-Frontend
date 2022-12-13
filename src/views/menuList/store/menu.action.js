import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMenu = createAsyncThunk('fetchMenu/menuStore', async () => {
    const result = await axios.get('http://localhost:3001/menulist')
    return result.data
})
