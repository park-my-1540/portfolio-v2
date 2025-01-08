import './style.css';
export default function Line({ className }: { className: string }) {
  return <span className={`line ${className}`}></span>;
}
