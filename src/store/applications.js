import {createSlice} from "@reduxjs/toolkit";
//import {applications, loadingPoints, unloadingPoints} from "../data";


export const slice = createSlice({
    name: 'applications',
    initialState: {

        applications: [],
        loadingPoints: [],
        unloadingPoints: [],

    },
    reducers: {
        fetchApplications: (state, action) => ({
            ...state,
            applications: action.payload
        }),

        setLoadingPointToApplication: (state, action) => ({
                        ...state,
            applications: state.applications.map(item => {
                if (item.id === action.payload.id) {
                    return ({
                        ...item,
                        loadingPoint: action.payload.loadingPoint
                    })
                }
                return item
            })
        }),
        setUnLoadingPointToApplication: (state, action) => ({
            ...state,
            applications: state.applications.map(item => {
                if (item.id === action.payload.id) {
                    return ({
                        ...item,
                        unloadingPoint: action.payload.unLoadingPoint
                    })
                }
                return item
            })
        }),

        fetchLoadingPoints: (state, action) => ({
            ...state,
            loadingPoints: action.payload
        }),
        fetchUnloadingPoints: (state, action) => ({
            ...state,
            unloadingPoints: action.payload
        }),

        cleanData: () => ({
            applications: [],
            loadingPoints: [],
            unloadingPoints: [],

        })
    }
})

export const {fetchApplications, fetchLoadingPoints, fetchUnloadingPoints,  cleanData, setLoadingPointToApplication, setUnLoadingPointToApplication} = slice.actions

export const selectApplicationsData = state => state.applications.applications
export const selectLoadingPoints = state => state.applications.loadingPoints
export const selectUnloadingPoints = state => state.applications.unloadingPoints


/*export const getApplications = () => (dispatch ) => {

    dispatch(fetchApplications(applications))

}
export const getLoadingPoints = () => (dispatch ) => {

    dispatch(fetchLoadingPoints(loadingPoints))

}
export const getUnloadingPoints = () => (dispatch ) => {

    dispatch(fetchUnloadingPoints(unloadingPoints))

}*/

export default slice.reducer