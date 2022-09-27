export default function Section(props) {
  return (
    <section>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>

        <ul class="games-list">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitch.tv/directory/game/VALORANT"
            >
              <img
                src="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"
                alt="Imagem do jogo VALORANT"
              />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitch.tv/directory/game/League%20of%20Legends"
            >
              <img
                src="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"
                alt="Imagem do jogo League of Legends"
              />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitch.tv/directory/game/Apex%20Legends"
            >
              <img
                src="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"
                alt="Imagem do jogo Apex Legends"
              />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitch.tv/directory/game/Apex%20Legends"
            >
              <img
                src="https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-188x250.jpg"
                alt="Imagem do Call of Duty: Modern Warfare 2>"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
