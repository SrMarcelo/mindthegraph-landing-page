/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const InfoCard = ({ title, image, description, button, onClick }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#EEEEEE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: {
          xs: 4,
          md: 0,
        },
      }}
      elevation={0}
    >
      <CardMedia component="img" image={image} />
      <CardContent
        sx={{
          padding: 0,
        }}
      >
        <Typography
          gutterBottom
          variant="p"
          component="div"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            textAlign: "center",
            mt: 1,
            px: 3,
            color: "#7833FF",
            width: "100%",
            height: "4rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="#212121"
          sx={{
            fontSize: "1rem",
            textAlign: "center",
            mt: 1,
            color: "#212121",
            height: "6rem",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          "& .MuiButton-root": {
            textTransform: "none",
            minWidth: "auto",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: "transparent",
            },
            transition: "all 0.3s ease-in-out",
            fontSize: {
              xs: "0.8rem",
              md: "0.9rem",
              xl: "1rem",
            },
          },
        }}
      >
        <Button
          size="small"
          onClick={onClick}
          sx={{
            color: "#7833FF",
            fontWeight: "bold",
          }}
        >
          {button}
        </Button>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
