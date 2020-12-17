import React, { Component, Fragment } from "react";

import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';

import './SignupGamer.css'

class SignupGamer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "name": '',
      "fatherLastname":'',
      "motherLastname":'',
      "nickname":'',
      "email": '',
      "gamerPicture":'',
      "gamerProfile":'',
      "country":'',
      "team":'',
      "totalMatches":'',
      "winPercentage":'',
      "ranking":'',
      "teamLogo":'',
      "countryLogo":'',
      "gameTime":'',
      "gamesPlayed":'',
      "tournamentsPlayed":'',
      "socialMedia":''
      // "password":''
    };

    this.handleNewPostChange = this.handleNewPostChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewPostChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, fatherLastname, motherLastname, nickname, email, gamerPicture, gamerProfile, country, team, totalMatches, winPercentage, ranking, teamLogo, countryLogo, gameTime, gamesPlayed, tournamentsPlayed, socialMedia } = this.state;
    const newGamer = {
      name: name,
      fatherLastname: fatherLastname,
      motherLastname: motherLastname,
      nickname: nickname,
      email:  email,
      gamerPicture: gamerPicture,
      gamerProfile: gamerProfile,
      country: country,
      team: team,
      totalMatches: totalMatches,
      winPercentage: winPercentage,
      ranking: ranking,
      teamLogo: teamLogo,
      countryLogo: countryLogo,
      gameTime: gameTime,
      gamesPlayed: gamesPlayed,
      tournamentsPlayed: tournamentsPlayed,
      socialMedia: socialMedia
      // password: password 
    };
    // console.log(newGamer);

    fetch("https://nekuapi-sleepy-kudu-wm.mybluemix.net/players/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGamer),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data.success){
          window.location.href="/Gamers"
        }
        // this.props.history.push("/players");
        // console.log(data)
      });
  }


  render() {
    const { name, fatherLastname, motherLastname, nickname, email, gamerPicture, gamerProfile, country, team, totalMatches, winPercentage, ranking, teamLogo, countryLogo, gameTime, gamesPlayed, tournamentsPlayed, socialMedia } = this.state;
    
    return (
    <Fragment>
      <Card className="formCard border-0 p-3">
        <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 10, offset: 1 }}>
          <CardImg id="formCardImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-forms-banner-gamers.png?raw=true" alt="Card image cap" />
          <Form onSubmit={this.handleSubmit} className="signupForm">
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="signupName">Nombre</Label>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleNewPostChange}
                    id="signupName"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupFatherLastName">Apellido Paterno</Label>
                  <Input
                    type="text"
                    name="fatherLastname"
                    value={fatherLastname}
                    onChange={this.handleNewPostChange}
                    id="signupLastName"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupMotherLastName">Apellido Materno</Label>
                  <Input
                    type="text"
                    name="motherLastname"
                    value={motherLastname}
                    onChange={this.handleNewPostChange}
                    id="signupMotherLastName"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupAlias">Apodo</Label>
                  <Input
                    type="text"
                    name="nickname"
                    value={nickname}
                    onChange={this.handleNewPostChange}
                    id="signupNickName"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupGamerProfile">Biografía</Label>
                  <Input
                    type="text"
                    name="gamerProfile"
                    value={gamerProfile}
                    onChange={this.handleNewPostChange}
                    id="signupGamerProfile"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupTotalMatches">Batallas Jugadas</Label>
                  <Input
                    type="text"
                    name="totalMatches"
                    value={totalMatches}
                    onChange={this.handleNewPostChange}
                    id="signupTotalMatches"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupWinPercentage">Triunfos</Label>
                  <Input
                    type="text"
                    name="winPercentage"
                    value={winPercentage}
                    onChange={this.handleNewPostChange}
                    id="signupWinPercentage"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupGamesPlayed">Juegos</Label>
                  <Input
                    type="text"
                    name="gamesPlayed"
                    value={gamesPlayed}
                    onChange={this.handleNewPostChange}
                    id="signupGamesPlayed"
                    placeholder="> " />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="signupTeam">Equipo</Label>
                  <Input
                    type="text"
                    name="team"
                    value={team}
                    onChange={this.handleNewPostChange}
                    id="signupTeam"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupCountry">País</Label>
                  <Input
                    type="text"
                    name="country"
                    value={country}
                    onChange={this.handleNewPostChange}
                    id="signupGamerProfile"
                    placeholder="> "  />
                </FormGroup>
                <FormGroup>
                  <Label for="signupCountryLogo">Bandera País</Label>
                  <Input
                    type="text"
                    name="countryLogo"
                    value={countryLogo}
                    onChange={this.handleNewPostChange}
                    id="signupCountryLogo"
                    placeholder="> "  />
                </FormGroup>
                <FormGroup>
                  <Label for="signupEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleNewPostChange}
                    id="signupEmail"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupGamerPicture">Foto de Perfil</Label>
                  <Input
                    type="text"
                    name="gamerPicture"
                    value={gamerPicture}
                    onChange={this.handleNewPostChange}
                    id="signupGamerPicture" 
                    placeholder="https:// " />
                  <caption className="pt-0" id="pictureCaption">Escribir URL de la imagen. Sólo en formatos .jpg / .png y no mayor a 1000x1000px.</caption>
                </FormGroup>
                <FormGroup>
                  <Label for="signupRanking">Ranking</Label>
                  <Input
                    type="text"
                    name="ranking"
                    value={ranking}
                    onChange={this.handleNewPostChange}
                    id="signupRanking"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupTeamLogo">Logo Equipo</Label>
                  <Input
                    type="text"
                    name="teamLogo"
                    value={teamLogo}
                    onChange={this.handleNewPostChange}
                    id="signupTeamLogo"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupGameTime">Tiempo de Juego</Label>
                  <Input
                    type="text"
                    name="gameTime"
                    value={gameTime}
                    onChange={this.handleNewPostChange}
                    id="signupGameTime"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupTournamentsPlayed">Torneos Participados</Label>
                  <Input
                    type="text"
                    name="tournamentsPlayed"
                    value={tournamentsPlayed}
                    onChange={this.handleNewPostChange}
                    id="signupTournamentsPlayed"
                    placeholder="> " />
                </FormGroup>
                <FormGroup>
                  <Label for="signupSocialMedia">Social Media</Label>
                  <Input
                    type="text"
                    name="socialMedia"
                    value={socialMedia}
                    onChange={this.handleNewPostChange}
                    id="signupSocialMedia"
                    placeholder="> " />
                </FormGroup>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center py-2">
              <Button type="submit">REGÍSTRATE</Button>
            </Row>
          </Form>
        </Col>
      </Card>
    </Fragment>
  )}
}

export default SignupGamer;