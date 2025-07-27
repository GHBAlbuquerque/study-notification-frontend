import styles from './styles.module.css';

type DefaultSelectProps = {
  labelText?: string;
} & React.ComponentProps<'select'>;

export function DefaultSelect({ labelText, id, ...props }: DefaultSelectProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <select className={styles.input} id={id} {...props}></select>
    </>
  );
}
