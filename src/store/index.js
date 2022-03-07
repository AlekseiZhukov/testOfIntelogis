import { configureStore } from "@reduxjs/toolkit";

import applicationsReducer from './applications'

export default configureStore({
    reducer: {
        applications: applicationsReducer,

    }
})