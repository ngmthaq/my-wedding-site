import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { Link } from "react-router";
import { paths } from "../../constants";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6" marginBottom={2}>
              The page you're looking for doesn't exist.
            </Typography>
            <Link to={paths.home}>
              <Button variant="contained">Back To Home Page</Button>
            </Link>
          </Grid2>
          <Grid2 size={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="Not Found Page"
              width={500}
              height={250}
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
