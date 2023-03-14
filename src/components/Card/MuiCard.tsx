//Mui
import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia
} from '@mui/material';



const MuiCard = () => {// Contains content and actions about a single topic
    return (
        <Box width='300px'>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image='https://source.unsplash.com/random'
                    alt='unsplash image'
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                    >
                        Lorem
                    </Typography>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tenetur pariatur, autem qui quis expedita consectetur deserunt voluptatum aut, neque nobis maiores esse ullam provident minus asperiores quasi quod unde?
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard;