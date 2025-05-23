import { ENDPOINT } from '@/constants/constants';
import authServiceInstance from '../../api/authService';
import {
  SigninPayload,
  SignupPayload,
  SignupResponse,
  User,
} from '../../types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface SessionState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: SessionState = {
  user: null,
  loading: false,
  error: null,
};

export const signup = createAsyncThunk(
  'session/signup',
  async (formData: SignupPayload, { rejectWithValue }): Promise<any> => {
    try {
      console.log(formData);
      const response: SignupResponse =
        await authServiceInstance.signup(formData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'Signup error');
    }
  },
);

export const signin = createAsyncThunk(
  'session/signin',
  async (formData: SigninPayload, { rejectWithValue }): Promise<any> => {
    try {
      console.log(formData);
      const response: SignupResponse =
        await authServiceInstance.signin(formData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'Signup error');
    }
  },
);

export const fetchUserInfo = createAsyncThunk(
  'session/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authServiceInstance.get(ENDPOINT.GetUser);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'Get user error');
    }
  },
);

export const confirmEmail = createAsyncThunk(
  'session/confirmEmail',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await authServiceInstance.get(ENDPOINT.EmailConfirm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'Get user error');
    }
  },
);

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserInfo.fulfilled,
        (state, action: PayloadAction<SignupResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
        },
      )
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(confirmEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(confirmEmail.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(confirmEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default sessionSlice.reducer;
