import React, { useState, useEffect } from "react";
import "../../../App.css";
import { Container, Col, Table, Button, Modal } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { fetchAllArtists, createArtist } from "../../../api/artists";
import Header from "../../../components/Header";
import { Wrapper, FormWrapper } from "./styled";
import { FormControl } from "react-bootstrap";

const AdminArtists = () => {
  const [artists, setArtists] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [artistUrl, setArtistUrl] = useState("");

  useEffect(() => {
    fetchAllArtists().then(({ data }) => {
      setArtists(data);
    });
  }, []);

  const toggleModalCreate = () => setShowCreate(!showCreate);
  const toggleModalEdit = () => setShowEdit(!showEdit);

  const createNewArtist = () => {
    createArtist(artistName, artistUrl);
    toggleModalCreate();
  };

  return (
    <>
      <Header />
      <Container>
        <Col>
          <Wrapper>
            <Button
             style={{ float: "right", margin: 4 }}
             onClick={toggleModalCreate}
            >
              Criar
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {artists.map((artist) => (
                  <tr>
                    <td>{artist.id}</td>
                    <td>{artist.name}</td>
                    <td>
                      <Button
                        style={{ float: "right", marginHorizontal: 4 }}
                        onClick={toggleModalEdit}
                      >
                        Editar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Wrapper>
        </Col>
      </Container>
      <Footer />
      <Modal show={showCreate}>
        <Modal.Header>
          <Modal.Title>Criar Artista</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormWrapper>
            <FormControl
              placeholder="Nome do Artista"
              aria-label="Artista"
              aria-describedby="basic-addon1"
              onChange={(e) => setArtistName(e.target.value)}
              style={{ marginBottom: 12 }}
            />
            <FormControl
              placeholder="Imagem do Artista"
              aria-label="Imagem"
              aria-describedby="basic-addon1"
              onChange={(e) => setArtistUrl(e.target.value)}
            />
          </FormWrapper>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModalCreate}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={createNewArtist}>
            Criar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminArtists;
