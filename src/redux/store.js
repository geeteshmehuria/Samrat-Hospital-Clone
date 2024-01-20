import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import docterSlice from "./docterSlice";

// export const store =configureStore({
//     reducer:{
//         auth:authReducer,
//         // bookAppointment:bookAppointmentReducer
//     }
// })

export const store = configureStore({
  reducer: {
    auth: authSlice,
    doctor: docterSlice,
  },
});
