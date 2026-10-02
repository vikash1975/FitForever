import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { submitContact } from "../services/api";

export const submitContactForm=createAsyncThunk(
    "contact/submitContactForm",

    async (data,{rejectedWithValue})=>{
       try {
         const response=await submitContact(data);
          return response.data;
       } catch (error) {
          return rejectedWithValue(error.response?.data?.message || "Something Went Wrong");
       }
    }

);


const contactSlice=createSlice({
    name:"contact",
    initialState:{
        loading:false,
        success:false,
        error:null,
        message:"",
    },


    reducers:{
        resetContactState:(state)=>{
            state.loading=false;
            state.success=false;
            state.error=null;
            state.message="";
        },
    },



    extraReducers:(builder)=>{
        builder
        .addCase(submitContactForm.pending,(state)=>{
            state.loading=true;
            state.success=false;
            state.error=null;
        })


        .addCase(submitContactForm.fulfilled,(state,action)=>{
            state.loading=false;
            state.success=true;
            state.message=action.payload.message;
        })


        .addCase(submitContactForm.rejected,(state,action)=>{
            state.loading=false;
            state.success=false;
            state.error=action.payload;
        });
    },

});



export const {resetContactState}=contactSlice.actions;

export default contactSlice.reducer;