import styles from "./MovieCard.module.css";

type MovieCardProps = {
  title: string;
  thumbnail: string | null;
  releaseDate: string;
};

const MovieCard = ({ title, thumbnail, releaseDate }: MovieCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.posterWrapper}>
        {thumbnail ? (
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w500${thumbnail}`}
            alt={title}
          />
        ) : (
          <div className={styles.posterPlaceholder}>No image</div>
        )}
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        {releaseDate ? (
          <time className={styles.releaseDate} dateTime={releaseDate}>
            {new Date(releaseDate).toLocaleDateString("en-GB")}
          </time>
        ) : (
          <span className={styles.releaseDate}>Release date unknown</span>
        )}
      </div>
    </article>
  );
};

export default MovieCard;
