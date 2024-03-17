import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InfoCard from "../InfoCard";

import image1 from "../../assets/image_1.svg";
import image2 from "../../assets/image_2.svg";
import image3 from "../../assets/image_3.svg";

const InfoCardsGroup = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        pt: 8,
        pb: 2,
        px: 12,
        "& .MuiGrid-item": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="p"
          sx={{
            color: "#7833FF",
            fontWeight: "bold",
            textAlign: "center",
            mb: 7,
            fontSize: "1.8rem",
          }}
        >
          Visualize what Mind the Graph can do for you
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
        <InfoCard
          title="Graphical Abstracts and Infographics"
          image={image2}
          description="Improve your paper's impact and visibility through quality visual communication"
          button="> Learn more"
        />
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
        <InfoCard
          title="Scientific Poster in a few clicks"
          image={image3}
          description="Add visual impact to your posters with scientific illustrations and graphics"
          button="> Learn more"
        />
      </Grid>
      <Grid item xs={12} sm={5} md={3}>
        <InfoCard
          title="Custom Illustrations and Animations"
          image={image1}
          description="Get your message across with custom illustrations and animations"
          button="> Learn more"
        />
      </Grid>
    </Grid>
  );
};

export default InfoCardsGroup;
