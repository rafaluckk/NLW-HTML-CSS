import "./App.css";
import Header from "./components/Header";
import ListItems from "./components/ListItems";
import Section from "./components/Section";


const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
    alt: "Imagem do jogo VALORANT",
  },

  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
    alt: "Imagem do jogo League of Legends",
  },

  {
    url: "https://www.twitch.tv/directory/game/Apex%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg",
    alt: "Imagem do jogo Apex Legends",
  },

  {
    url: "https://www.twitch.tv/directory/game/Apex%20Legends",
    imageUrl:
      "https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-188x250.jpg",
    alt: "Imagem do Call of Duty: Modern Warfare 2>",
  },
];

const streamerListData = [
  {
    url: "https://www.twitch.tv/casimito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-150x150.png",
    alt: "Imagem de Casemiro",
  },

  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka",
  },

  {
    url: "https://www.twitch.tv/gaules",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-150x150.png",
    alt: "Imagem de Gaules",
  },
];

const redesListData = [
  {
    url: "https://github.com/rafaluckk",
    imageUrl: "/assets/github.svg",
  },

  {
    url: "https://www.linkedin.com/in/rafael-gon%C3%A7alves-8705a0248/",
    imageUrl: "/assets/linkedin.svg",
  },
];



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gameListData.map(function (item) {
            return (
              <ListItems
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
                className={item.className}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {streamerListData.map(function (item) {
            return (
              <ListItems
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
                className={item.className}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {redesListData.map(function (item) {
            return <ListItems url={item.url} imageUrl={item.imageUrl} />;
          })}
        </Section>
      </main>
    </div>
  );
}

export default App;
