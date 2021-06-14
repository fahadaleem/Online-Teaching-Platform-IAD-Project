import React, { useState, useContext } from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles, Typography, Checkbox, FormControlLabel, Box } from "@material-ui/core"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Autocomplete from "@material-ui/lab/Autocomplete";


const useStyle = makeStyles(theme => ({
    root: {
        // backgroundColor: "#E9EAED",
        backgroundColor: "#3d275a",
        position: "absolute",
        height: "100%",
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
        marginTop: "90px",
        padding: "30px 50px",
        borderRadius: "15px 100px"
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
            borderColor: "#3d275a !important",
        },
        width: "100%",
    },
    submitBtn: {
        width: "100%",
        marginTop: "0px",
        backgroundColor: "#3d275a",
        "&:hover": {
            backgroundColor: "#b57cff",
        },
        align: "center",

    },
    linkBtn: {
        textDecoration: "none",
        fontSize: "18px",
        color: "#3d275a",
    },
    inputLabel: {
        color: "#3d275a !important",
        fontWeight: "500",
      },

}))




const StudentLogin = () => {

    const classes = useStyle();

    const [rememberMe, setRememberMe] = useState(false);

    const [studentData, setStudentData] = useState({

        email: "",
        password: "",
    });



    const handleToggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };


    return (
        <div className={classes.root}>
            <Container maxWidth="xs" className={classes.mainContainer}>
                <Typography variant="h3"
                    color="initial"
                    align="center"
                    className={`${classes.customFont} ${classes.mainHeading}`}
                    style={{ marginBottom: "30px" }}>
                    Student Login
                </Typography>
                <TextField
                    id="email"
                    label="Email Address"
                    variant="outlined"
                    InputLabelProps={{className: classes.inputLabel}}
                    className={`${classes.textField} ${classes.customFont}`}
                    value={studentData.email}
                    onChange={(e) => {
                        setStudentData({
                            ...studentData,
                            email: e.target.value,
                        });
                    }}
                >

                </TextField>
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    InputLabelProps={{className: classes.inputLabel}}
                    className={`${classes.textField} ${classes.customFont}`}
                    inputProps={{
                        autocomplete: 'new-password',
                        form: {
                            autocomplete: 'off',
                        },
                    }}
                    type="password"
                    value={studentData.password}
                    onChange={(e) => {
                        setStudentData({
                            ...studentData,
                            password: e.target.value,
                        });
                    }}
                ></TextField>
                <FormControlLabel
                    label="Remember Me"
                    control={
                        <Checkbox
                            value="Remember Me"
                            checked={rememberMe}
                            onChange={handleToggleRememberMe}
                            color="primary"
                        />
                    }
                />

                <Box style={{ textAlign: "center" }} my={1}>
                    <Button color="primary">
                        <a href="#" className={classes.linkBtn}>
                            Reset Password
                </a>
                    </Button>
                </Box>

                <Button variant="contained"
                color="primary"
                endIcon={<KeyboardArrowRightIcon />}
                className={`${classes.submitBtn} ${classes.textField}`}
                size="large"
                type="submit"
                 >
                  Login
                </Button>

            </Container>
        </div>
    );

}

export default StudentLogin;