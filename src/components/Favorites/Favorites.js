import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
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
            src="/images/hmart.jpg"
            onClick={() =>
              window.open(
                "https://www.penguinrandomhouse.com/books/612676/crying-in-h-mart-by-michelle-zauner/",
                "_blank"
              )
            }
          />
          <SectionSubText>
            As mentioned before I enjoy reading and this is my favorite book!
            It's a memoir that focuses on cultural identity and death. It sounds
            heavy but the way it was written made it easy to read through even
            with its strong topics.
          </SectionSubText>
        </ItemDiv>
        <ItemDiv>
          <br />
          <br /> <br /> <br /> <br />
          <Img
            src="/images/beatopia.jpg"
            onClick={() =>
              window.open(
                "https://open.spotify.com/album/3u0ggfmK0vjuHMNdUbtaa9?si=-ekEbP8fQemLCRJLlhc8Cw",
                "_blank"
              )
            }
          />
          <SectionSubText>
            This is my current favorite album! I enjoy the cohesiveness of the
            album balancing between soft acoustic ballads and catchy punk rock
            songs.
          </SectionSubText>
        </ItemDiv>
      </GridDiv>
    </Section>
  );
};

export default Favorites;
