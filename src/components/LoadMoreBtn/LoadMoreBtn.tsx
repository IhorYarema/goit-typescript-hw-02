import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.button}>
        Load more
      </button>
    </div>
  );
}
