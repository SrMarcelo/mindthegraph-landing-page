import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import FeaturesCard from "../FeaturesCard";

const features = [
  {
    img: "/src/assets/ico_drag.svg",
    title: "Drag and Drop",
    description: "Easily select and manage illustrations, text and templates",
  },
  {
    img: "/src/assets/ico_premade.svg",
    title: "Pre-Made Resources",
    description:
      "Don't waste time! Use our templates and just customize colours, text etc",
  },
  {
    img: "/src/assets/ico_platform.svg",
    title: "Online Platform",
    description: "Access your creations at any time and from anywhere",
  },
  {
    img: "/src/assets/ico_odemand.svg",
    title: "On-demand Illustrations",
    description: "Don't find excatly what you need? We will design it for you",
  },
  {
    img: "/src/assets/ico_multiple.svg",
    title: "Multiple Sizing Options",
    description: "Ready-to-go templates in all popular sizes",
  },
  {
    img: "/src/assets/ico_share.svg",
    title: "Share Creations",
    description: "Share your creations with your team or other users",
  },
];

const FeaturesBox = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        pt: 5,
        pb: 10,
      }}
    >
      <Grid
        container
        className="bg-purplish rounded-2xl"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          pt: 8,
          pb: 2,
          px: {
            xs: 2,
            sm: 4,
            md: 8,
          },
          "& .MuiGrid-item": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          width: "80%",
        }}
      >
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="p"
              sx={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                mb: 4,
                fontSize: "1.8rem",
              }}
            >
              Create effective science figures in minutes
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant="p"
              sx={{
                color: "white",
                textAlign: "center",
                mb: 7,
                fontSize: "1rem",
              }}
            >
              We built Mind the Graph for simplicity. The platform is easy to
              use and just about anybody can use it to create great infographics
              and presentations - from beginners to professionals, individuals
              to groups and small labs to large organisations
            </Typography>
          </Grid>
        </Grid>
        <Grid container display="flex" justifyContent="space-evenly">
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              key={index}
              sx={{
                px: 7,
              }}
            >
              <FeaturesCard
                title={feature.title}
                image={feature.img}
                description={feature.description}
                button={feature.button}
              />
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            "& .MuiButton-root": {
              minWidth: "auto",
              "&:hover": {
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease-in-out",
              fontSize: {
                xs: "0.8rem",
                md: "0.9rem",
                xl: "1rem",
              },
            },
            mb: 4,
          }}
        >
          <Button
            sx={{
              p: 0,
              color: "#fff",
              backgroundColor: "#7833FF",
              borderRadius: "50px",
              px: 4,
              py: 0.3,
              ml: { sm: 1, md: 2 },
              border: "1px solid white",
              "&:hover": {
                backgroundColor: "#FFF",
                color: "#7833FF",
                border: "1px solid #FFF",
              },
            }}
          >
            Explore mind the graph
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesBox;
