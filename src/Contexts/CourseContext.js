import React, { createContext, useState } from "react";
import axios from "axios";
import baseUrl from "../mytutor-backend"

const CourseContext = createContext();

const CourseContextProvider = (props) => {
  const [loading, setLoading] = useState(false);




  const handleValidate = (data) => {
    const fields = Object.keys(data);
    const errors = fields.filter((elem, index) => {
      return data[elem] === "";
    });

    return errors;
  };

  const handleRemoveErrors = (state, errors) => {
    return errors.filter((elem) => {
      return state[elem] === "";
    });
  };

  async function handleAddNewCourse(courseData) {
    setLoading(true)
    try {
        
        const resp = await axios({
            method:"POST",
            url:`${baseUrl}/add-new-course`,
            data:{
                ...courseData,
                course_outline:courseData.courseOutline
            }
        })
        setLoading(false)
        console.log(resp)
        return resp.data

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CourseContext.Provider
      value={{
        handleAddNewCourse,
        loading,
        handleValidate,
        handleRemoveErrors,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export { CourseContext, CourseContextProvider };
