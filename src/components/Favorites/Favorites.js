import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionSubText,
} from "../../styles/GlobalComponents";
import { Img, GridDiv, ItemDiv } from "./FavoritesStyles";
const Favorites = () => {
  return (
    <Section id="favorites">
      <SectionDivider />
      <SectionTitle main> Favorites</SectionTitle>
      <GridDiv>
        <ItemDiv>
          <Img
            src="/images/dunept2.jpg"
            onClick={() =>
              window.open(
                "https://letterboxd.com/film/dune-part-two/",
                "_blank"
              )
            }
          />
          <SectionSubText>
            This was my favorite movie of 2024! This was the perfect follow-up
            to the first Dune. The first Dune was all about setting up the plot
            and introducing the world of Dune, whereas this movie is where
            everything pays off.
          </SectionSubText>
        </ItemDiv>
        <ItemDiv>
          <Img
            src="/images/chromakopia.jpg"
            onClick={() =>
              window.open(
                "https://open.spotify.com/album/0U28P0QVB1QRxpqp5IHOlH?si=9da3exQ7RGSbp-2i6y9Fkg",
                "_blank"
              )
            }
          />
          <SectionSubText>
            This is my current favorite album! I've been enjoying it a lot
            because I think this is Tyler's most vulnerable album yet. He opens
            up about sensitive topics like relationships, self-acceptance, his
            lack of a father figure, and more. On top of these more serious
            topics, he balances it all out with lots of bragging and shows off
            his ability to create uniquely sounding hard hitting songs.
          </SectionSubText>
        </ItemDiv>
      </GridDiv>
    </Section>
  );
};

export default Favorites;
