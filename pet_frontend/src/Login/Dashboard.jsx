import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import NavBar from "../NavBar/NavBar";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    axios
      .get("http://localhost:8080/getAllApplications")
      .then((response) => {
        console.log(response);
        const sortedApplications = response.data.sort((a, b) => a.id - b.id);
        setApplications(sortedApplications);
      })
      .catch((error) => {
        console.error("Error fetching applications:", error);
      });
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const endpoint = newStatus === true ? "updateStatus" : "reverseStatus";
      const response = await axios.put(`http://localhost:8080/${endpoint}`, {
        id: id
      });
      console.log("Updated successfully:", response.data);
      getAll();
    } catch (error) {
      console.error("Error updating application status:", error);
      getAll();
    }
  };

  return (
    <>
      {/* <NavBar /> */}
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            style={{ color: "#333", textAlign: "center", marginBottom: "20px" }}
          >
            Adoption Applications
          </Typography>
          <Table striped bordered hover>
            <thead style={{ backgroundColor: "#f0f0f0" }}>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Email</th>
                <th>Pet</th>
                <th>Created At</th>
                <th>Species</th>
                <th>Breed</th>
                <th>Gender</th>
                <th>status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.id}</td>
                  <td>{app.user_id}</td>
                  <td>{app.email}</td>
                  <td>{app.petId}</td>
                  <td>{app.applicationDate}</td>

                  <td>{app.species}</td>
                  <td>{app.breed}</td>
                  <td>{app.gender}</td>
                  <td
                    style={{
                      color:
                        app.applicationStatus === "false"
                          ? "orange"
                          : app.applicationStatus === "true"
                            ? "green"
                            : "red",
                    }}
                  >
                    {app.applicationStatus?.toString()}
                  </td>
                  <td>
                    <Button
                      color="success"
                      sx={{ mr: 1 }}
                      onClick={() => handleStatusChange(app.id, true)}
                      disabled={app.applicationStatus === true}
                      style={{
                        marginRight: "10px",
                        backgroundColor: "#4CAF50",
                        border: "none",
                        borderRadius: "3px",
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => handleStatusChange(app.id, false)}
                      disabled={app.applicationStatus === false}
                      style={{
                        backgroundColor: "#f44336",
                        border: "none",
                        borderRadius: "3px",
                      }}
                    >
                      Reject
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
