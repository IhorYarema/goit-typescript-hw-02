import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({
  onClick,
}: LoadMoreBtnProps): JSX.Element {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.button}>
        Load more
      </button>
    </div>
  );
}
