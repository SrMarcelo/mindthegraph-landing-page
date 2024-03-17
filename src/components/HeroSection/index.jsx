import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import heroImage from "../../assets/head-02.png";

const HeroSection = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-evenly"
      sx={{
        pt: 8,
        pb: 2,
      }}
    >
      <Grid
        item
        sm={12}
        md={4}
        display="flex"
        alignItems="flex-start"
        direction="column"
        sx={{
          p: 2,
          px: 3,
          "& .MuiButton-root": {
            textTransform: "none",
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
        }}
      >
        <Typography
          variant="p"
          className="font-bold text-white"
          sx={{
            fontSize: {
              xs: "2.35rem",
              md: "3dvw",
            },
            lineHeight: 1.1,
          }}
        >
          Discover all possibilities of using this powerfull tool and create
          science figures, posters and infographics.
        </Typography>
        <Button
          sx={{
            p: 0,
            color: "#fff",
            backgroundColor: "#7833FF",
            borderRadius: "50px",
            px: 5,
            py: 0.9,
            mt: 5,
            border: "1px solid #7833FF",
            "&:hover": {
              backgroundColor: "#FFF",
              color: "#7833FF",
              border: "1px solid #FFF",
            },
          }}
        >
          Start creating now
        </Button>
      </Grid>
      {/* TODO: Make the img element overflow */}
      <Grid
        item
        sm={12}
        md={5}
        sx={{
          padding: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
        display="flex"
        justifyContent="center"
      >
        <img src={heroImage} alt="Preview Mind the Graph" />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
