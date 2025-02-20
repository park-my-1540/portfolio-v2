import * as style from './index.css';

export default function ScrollArrow() {
  return (
    <div className={style.wrapper}>
      <div className={style.scrolldown}>
        <svg height="30" width="10">
          <circle className={style.scrolldownP1} cx="5" cy="15" r="2" />
          <circle className={style.scrolldownP2} cx="5" cy="15" r="2" />
        </svg>
      </div>
    </div>
  );
}
