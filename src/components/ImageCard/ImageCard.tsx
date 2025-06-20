import styles from './ImageCard.module.css';
import { UnsplashImage } from '../../api/unsplash';

interface ImageCardProps {
  image: UnsplashImage;
  onClick: () => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description ?? 'Image'}
        className={styles.image}
      />
    </div>
  );
}
