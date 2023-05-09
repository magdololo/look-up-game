import {Link} from "react-router-dom";
import {
    GameTitle,
    MainContainer,
    Box,
    PlayButton,
    Subtitle,
    Anime,
    TitleWithAnime, Eye, LeftEye, Brow, RightEye
} from "../styles/LandingPage.components";
import {useTranslation} from "react-i18next";

export default function LandingPage(){
    const { t } = useTranslation();
    return(
        <>
            <MainContainer>
                <Box>
                    <TitleWithAnime>
                        <GameTitle className="font-face-courgette">Look Up</GameTitle>
                        <Anime>
                            <LeftEye>
                                <Brow/>
                                <Eye/>
                            </LeftEye>
                            <RightEye>
                                <Brow/>
                                <Eye/>
                            </RightEye>
                        </Anime>
                    </TitleWithAnime>
                    <Subtitle className="font-face-courgette">{t("landingPage.subtitle1")}</Subtitle>
                    <Subtitle className="font-face-courgette">{t("landingPage.subtitle2")}</Subtitle>
                    <Link to={`/game`}><PlayButton>Start</PlayButton></Link>
                </Box>
            </MainContainer>

        </>
    )
}