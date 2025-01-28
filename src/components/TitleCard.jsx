import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard({ title }) {
  return (
    <Card sx={{ flex: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' align='center' component='div'>
            {title}
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          height='40'
          image='/TitleCard.jpeg'
          alt='background'
        />
      </CardActionArea>
    </Card>
  );
}
