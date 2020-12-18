import React from "react"
import ProfileStats from "../../components/profileStats/index"
import ProfileTourCard from "../../components/profileTourCard/index"
import ProfileGames from "../../components/profileGames/index"
import ProfileSocialMedia from "../../components/profileSocialMedia/index"
import ProfileHeader from "../../components/profileHeader/index"
import { Container, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Profile.css";




const Profile = () => {

    return (
        <Container fluid className="profileContainer">
           <ProfileHeader></ProfileHeader>
            <ProfileStats/>
            <Col md="12" className="sectionTitle">Torneos</Col>
            <ProfileTourCard/>
            <Col md="12" className="sectionTitle">Juegos</Col>
            <ProfileGames/>
            <ProfileSocialMedia/>
        </Container>
    )

}

export default Profile;