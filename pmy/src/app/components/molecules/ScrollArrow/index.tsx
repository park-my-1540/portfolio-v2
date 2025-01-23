import './style.css';
import { Text } from '@/components/atoms/Text/Text';
export default function ScrollArrow() {
  return (
    <div className="scroll-down">
      <Text color="tertiary">Scroll down</Text>
      <div className="arrow"></div>
    </div>
  );
}
