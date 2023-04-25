import {Link} from "react-router-dom";
import {GameTitle, MainContainer, Box, PlayButton, Subtitle} from "../styles/LandingPage.components";
import {useTranslation} from "react-i18next";

export default function LandingPage(){
    const { t } = useTranslation();
    return(
        <>
            <MainContainer>
                <Box>
                    <GameTitle className="font-face-courgette">Look Up</GameTitle>
                    <Subtitle className="font-face-courgette">{t("landingPage.subtitle1")}</Subtitle>
                    <Subtitle className="font-face-courgette">{t("landingPage.subtitle2")}</Subtitle>
                    <Link to={`/game`}><PlayButton>Start</PlayButton></Link>
                </Box>


            </MainContainer>

        </>
    )
}