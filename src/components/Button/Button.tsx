import styles from './Button.module.css';

type ButtonProps = Readonly<{
  label: string;
  onClick: () => void;
}>;

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      className={styles.primary}
      onClick={onClick}
    >
      {label}
    </button>
  );
}