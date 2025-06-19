import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface City {
  id: number;
  city: string;
}

interface CityState {
  city: City;
  loading: boolean;
  error: string | null;
  selectedCity: City | null;
}

const initialState: CityState = {
  city: {
    id: 0,
    city: '',
  },
  loading: false,
  error: null,
  selectedCity: null,
};

export const fetchCity = createAsyncThunk(
  'city/fetch',
  async (cityName: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/cities/${cityName}`);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Failed to fetch city');
    }
  }
);

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    clearSelectedCity: (state) => {
      state.selectedCity = null;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.loading = false;
        state.city = action.payload;
      })
      .addCase(fetchCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSelectedCity, setSelectedCity } = citySlice.actions;

export default citySlice.reducer;
