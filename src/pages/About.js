import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Layout>
        <Box
          sx={{
            textAlign: "center",
            p: 2,
            mt: 5,
            mb: 5,
            color: "black",
            lineHeight: 1.5,
            width: "80%",
            margin: "auto",
            fontFamily: "monospace",
          }}
        >
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "monospace" }}
          >
            About
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "monospace" }}
          >
            My Resturent
          </Typography>
          <br />
          <p style={{ textAlign: "left", color: "black", lineHeight: 1.5, width: "80%", margin: "auto" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            ex voluptate quo repudiandae cumque quod necessitatibus, ipsa cum
            eaque magnam fugiat non vitae doloremque rem deserunt delectus modi
            beatae! Nostrum.
          </p>
          <br />
          <p style={{ textAlign: "left", color: "black", lineHeight: 1.5, width: "80%", margin: "auto" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            deserunt placeat praesentium, iste nemo accusamus, minima mollitia
            esse reiciendis corrupti delectus velit pariatur veniam? Delectus
            nihil debitis omnis voluptatem esse quis? Vero necessitatibus,
            quidem impedit esse, illum laudantium minus autem, quod illo
            repellendus voluptates iusto exercitationem doloribus obcaecati
            voluptate nesciunt odio quibusdam mollitia voluptatem corporis?
            Omnis nostrum reprehenderit atque ducimus sapiente, id consequatur
            dicta expedita sed minus porro impedit repellat facilis sunt maiores
            soluta minima qui eaque quas cum asperiores, nesciunt blanditiis,
            tempora optio? Repellendus optio ad, dicta, nisi odit, eligendi
            similique provident consectetur corrupti facilis aspernatur vel
            nostrum quam.
          </p>
        </Box>
      </Layout>
    </div>
  );
};

export default About;
