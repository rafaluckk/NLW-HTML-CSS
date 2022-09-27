export default function ListItems(props) {
  return (
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="{props.href}"
      >
        <img
          src="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"
          alt="Imagem do jogo VALORANT"
        />
      </a>
    </li>
  );
}
