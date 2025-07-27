import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'red' | 'orange' | 'gray';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'orange',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
