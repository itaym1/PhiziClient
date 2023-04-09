import {useState} from "react";
import {Button, Paper, Stack, TextField,Slider,Typography} from "@mui/material";
import api from "../util/api";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState()
    const [height, setHeight] = useState()

    const navigate = useNavigate()

    function handleBack() {
        navigate('/')
    }

    function handleRegister() {
        const response = api.register({email, password,age,height})
        if (!response.error) {
            navigate('/app')
        }
    }

    function valueLabelFormat(value) {
        return `${value} cm`;
    }

    return (
        <div style={{display:"flex", position: "absolute", height: "100%", width: "100%", justifyContent: "center", alignItems: "center"}}>
            <Paper style={{display: "flex", height: "60%", width: "60%", justifyContent: "center", alignItems: "center"}}>
                <Stack style={{textAlign: "center"}} direction="column" spacing={3}>
                    <h1 style={{paddingBottom: 4}}>Register</h1>
                    <TextField label="Email" value={email} onChange={(event) => setEmail(event.target.value)}></TextField>
                    <TextField type={"password"} label="Password" value={password} onChange={(event) => setPassword(event.target.value)}></TextField>
                    <TextField label="Age" value={age} onChange={(event) => setAge(event.target.value)}></TextField>
                    <Stack style={{textAlign: "center"}} direction="row" spacing={2}>
                    <Typography>
                    Height:
                    </Typography>
                    <Slider
                        value={height}
                        min={30}
                        step={1}
                        max={250}
                        getAriaValueText={valueLabelFormat}
                        valueLabelFormat={valueLabelFormat}
                        onChange={(event) => setHeight(event.target.value)}
                        valueLabelDisplay="auto"

                        
                    />
                    </Stack>
                    {/* <TextField label="Height" value={height} onChange={(event) => setHeight(event.target.value)}></TextField> */}
                    <Stack justifyContent={"space-between"} direction="row" spacing={3}>
                        <Button disabled={!height || !email || !password || !age} onClick={handleRegister}>Register</Button>
                        <Button onClick={handleBack}>Back</Button>
                    </Stack>
                </Stack>
            </Paper>
        </div>
    )
}