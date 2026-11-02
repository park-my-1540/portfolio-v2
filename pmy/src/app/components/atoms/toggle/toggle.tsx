import React from 'react';
import { useAtomValue } from 'jotai';
import Box from '@/components/layouts/Box/Box';
import themeState from '@/jotai/themeAtom';
import * as cursor from '@/utils/cursor';
import { switcher, switcherInput, switcherLabel, switcherIcon } from './index.css';

const Toggle = ({ changeTheme }: { changeTheme: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const { mode } = useAtomValue(themeState);
  return (
    <Box>
      <span className={switcher} onMouseEnter={() => cursor.set('point')} onMouseLeave={() => cursor.set(null)}>
        <input
          type="checkbox"
          id="switcher"
          className={switcherInput}
          checked={mode === 'light'}
          aria-label="라이트 모드"
          onChange={changeTheme}
        />
        <label htmlFor="switcher" className={switcherLabel}>
          <img className={switcherIcon} src={`/svg/toggle/${mode}.svg`} alt="" />
        </label>
      </span>
    </Box>
  );
};

export default Toggle;
