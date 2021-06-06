import React from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles, Typography } from "@material-ui/core"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";



const useStyle = makeStyles(theme => ({
    root: {
        // backgroundColor: "#E9EAED",
        backgroundColor: "#3d275a",
        position: "absolute",
        height: "maxContent",
        width: "100%",
    },
    button: {
        backgroundColor: "orange",
        padding: "25px",
        fontSize: "22px",
        align: "center",
    },
    mainContainer: {
        backgroundColor: "white",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "30px 50px"
    },
    customFont: {
        fontFamily: "'Quicksand', sans-serif",
        color: "#3d275a"
      },
    mainHeading: {
        fontWeight: "bold",
    
    },
    textField: {
        margin: "10px 0",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#29524A !important",
        },
        width: "100%",
    },
    submitBtn: {
        width: "100%",
        marginTop: "20px",
        backgroundColor: "#3d275a",
        "&:hover": {
          backgroundColor: "#b57cff",
        },
        align: "center",
        
      },
    
}))




const StudentSignUp = () => {


    const classes = useStyle()


    const [studentData, setStudentData] = setState();



    return (
        <div className={classes.root}>
            <Container maxWidth="xs" className={classes.mainContainer}>
                <Typography variant="h3"
                            color="initial"
                            align="center"
                            className={`${classes.customFont} ${classes.mainHeading}`} 
                            style={{marginBottom: "30px"}}>
                    Sign Up
                </Typography>
                <TextField
                  id="name"
                  label="Full Name"
                  variant="outlined"
                  className={`${classes.textField} ${classes.customFont}`} >
                  
                </TextField>
                <TextField
                  id="fatherName"
                  label="Father's Name"
                  variant="outlined"
                  className={`${classes.textField} ${classes.customFont}`} >
                  
                </TextField>
                <TextField
                  id="cnic"
                  label="CNIC"
                  variant="outlined"
                  className={`${classes.textField} ${classes.customFont}`} >
                  
                </TextField>
                <TextField
                  id="institute"
                  label="Current Institute"
                  variant="outlined"
                  className={`${classes.textField} ${classes.customFont}`} >
                  
                </TextField>
                <TextField
                  id="email"
                  label="Email Address"
                  variant="outlined"
                  className={`${classes.textField} ${classes.customFont}`} >
                  
                </TextField>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  className={`${classes.textField} ${classes.customFont}`} 
                  type="password">
                  
                </TextField>
                <TextField
                  id="cPassword"
                  label="Confirm Password"
                  variant="outlined"
                  className={`${classes.textField} ${classes.customFont}`} 
                  type="password">
                  
                </TextField>
                <Button variant="contained"
                color="primary"
                endIcon={<KeyboardArrowRightIcon />}
                className={`${classes.submitBtn} ${classes.textField}`}
                size="large"
                type="submit" >
                  Sign Up
                </Button>
            </Container>

        </div>
    )
}

export default StudentSignUp;