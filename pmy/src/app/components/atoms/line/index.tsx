import './style.css';
export default function Line({
  className,
  ref,
}: {
  className: string;
  ref: React.RefObject<HTMLDivElement>;
}) {
  return <span className={`line ${className}`} ref={ref}></span>;
}
