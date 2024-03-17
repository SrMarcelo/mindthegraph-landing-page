/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const FeaturesCard = ({ title, image, description }) => {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 4,
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        image={image}
        sx={{
          width: "60%",
        }}
      />
      <CardContent
        sx={{
          padding: 0,
          backgroundColor: "transparent",
        }}
      >
        <Typography
          gutterBottom
          variant="p"
          component="div"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
            mt: 1,
            color: "white",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "1rem",
            textAlign: "center",
            mt: 1,
            color: "white",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeaturesCard;
