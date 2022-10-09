import {createTheme} from "@mui/material";
const theme = createTheme({
    palette: {
        primary: {
            main: "#c79c34"
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: "BookNow"
                    },
                    style: {
                        fontFamily: "Roboto",
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        color: "#fff",
                        backgroundColor: "#c89c33",
                        borderRadius: "20px",

                    },
                },
            ],
        },
    },
})

export default theme