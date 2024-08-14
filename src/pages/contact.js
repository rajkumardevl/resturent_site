import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  Box,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  Table,
} from "@mui/material";

const Contact = () => {
  return (
    <>
      <Layout>
        <Box sx={{ my: 10, ml: 10 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aliquam quod doloribus voluptates iure atque cupiditate distinctio
            architecto sapiente? Molestiae optio iusto natus nisi voluptas odit
            doloribus nostrum harum? Quos quasi voluptatum consequatur inventore
            quis debitis dolor. Error nesciunt perferendis tempora deserunt, aut
            vitae commodi. Consectetur dolore omnis aut quasi sed voluptatem
            fugit? Dolore obcaecati animi delectus ipsam laborum sunt recusandae
            rem esse accusantium inventore! Iure magni distinctio similique,
            asperiores tempora illo itaque earum, corporis excepturi ipsa eos id
            officia neque qui ab atque? Ea assumenda rem itaque a atque, enim
            quos autem, incidunt maxime unde officia. Placeat, non similique?
          </p>
        </Box>
        <Box sx={{ m: 5, width: "80%", margin: "auto" }}>
          <TableContainer component={Paper} sx={{ bgcolor: "white", p: 2, mb: 5 }}>
            <Table aria-label="contact-table">
              <TableHead>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon
                      sx={{ fontSize: 30, mr: 2, color: "red", pt: 1 }}
                    />
                    1234567890 (support)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon
                      sx={{ fontSize: 30, mr: 2, color: "red", pt: 1 }}
                    />
                    rajkumarsharma70521412@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <LocalPhoneIcon
                      sx={{ fontSize: 30, mr: 2, color: "red", pt: 1 }}
                    />
                    7052141220
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    </>
  );
};

export default Contact;
