import React from 'react';
import { Container, Box, Grid, Card, CardContent, TextField, Button } from '@material-ui/core';

export default class Pagos extends React.Component{


    render(){
        return (
            <React.Fragment>
                <Container >
                    <Box>
                        <Grid 
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-end"
                        >
                            <Card>
                                
                                <CardContent>
                                <h1>DONATIONS</h1>
                                    <form noValidate autoComplete="off">
                                        <div>
                                            <TextField 
                                            required
                                            id="email"
                                            label="email"
                                            defaultValue=""
                                            type="email"
                                            />
                                        </div>
                                        
                                        <div>
                                            <TextField 
                                            required
                                            id="value"
                                            label="money"
                                            defaultValue=""
                                            type="number"
                                            />
                                        </div>

                                        <div style={{margin:50 }}>
                                            <Button 
                                            variant="contained"
                                            color="primary"
                                            disableElevation
                                            justify="center"
                                            >
                                                Donate
                                            </Button>
                                        </div>
                                        
                                    </form>
                                </CardContent>
                                
                            </Card>
                            
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        );
    }
}