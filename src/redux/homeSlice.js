import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    docSpecialization: "",
    docName: "",
  },
  reducers: {
    setDocDataFromHome: (state, action) => {
      state.docSpecialization = action.payload.docSpecialization;
      state.docName = action.payload.docName;
    },
  },
});

export const { setDocDataFromHome } = homeSlice.actions;
// export const selectDoctorData = (state) => state.doctor.data;

export default homeSlice.reducer;
