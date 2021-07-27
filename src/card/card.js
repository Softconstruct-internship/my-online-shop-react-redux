import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "56.25%"
    },
    categories: {
        padding: "20px"
    },

}));

export default function ShopCard() {
    const classes = useStyles();

    return (
        <div>

            <Card className="card_container" className={classes.root}>
                <CardHeader title="Shrimp and Chorizo Paella" />
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the
                        mussels, if you like.
                    </Typography>
                </CardContent>
                < Typography className={classes.categories}>
                    <h3>
                        Category: <span>fruit</span>{" "}
                    </h3>
                    <h3>
                        Made by:<span>fruit</span>{" "}
                    </h3>
                    <h3>
                        Organic: <span>fruit</span>{" "}
                    </h3>
                    <h3>
                        Price: <span>fruit</span>{" "}
                    </h3>
                </Typography>
                <Button variant="contained" color="primary">
                    Add to Card
                </Button>

            </Card>
        </div>
    );
}
