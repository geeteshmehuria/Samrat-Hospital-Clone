// doctorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    data: null,
  },
  reducers: {
    setDoctorData: (state, action) => {
      state.data = action.payload;
    //   console.log("<<<<<<<<<<<<<<<<<<<<",state.data)
    },
  },
});

export const { setDoctorData } = doctorSlice.actions;
// export const selectDoctorData = (state) => state.doctor.data;

export default doctorSlice.reducer;
