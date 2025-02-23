import React, { useCallback } from 'react';
import Box from '@/components/layouts/Box/Box';
import { switcher, switcherInput, switcherLabel } from './index.css';
import * as theme from '@/utils/theme';
import * as cursor from '@/utils/cursor';

export const Toggle = ({ changeTheme }: { changeTheme: (e) => void }) => {
  const _theme = theme.getTheme();
  return (
    <Box>
      <span
        className={switcher}
        onMouseEnter={() => cursor.set('point')}
        onMouseLeave={() => cursor.set(null)}
      >
        {/* 테마 스위치 */}
        <input
          ref={useCallback(
            (node: HTMLInputElement | null) => {
              if (node) node.checked = _theme === 'light';
            },
            [_theme],
          )}
          type="checkbox"
          id="switcher"
          className={switcherInput}
          onChange={changeTheme}
        />

        <label htmlFor="switcher" className={switcherLabel}>
          <img
            ref={useCallback(
              (node: HTMLImageElement | null) => {
                if (node) node.src = `/svg/toggle/${_theme}.svg`;
              },
              [_theme],
            )}
            src={`/svg/toggle/${_theme}.svg`}
            alt={_theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            width={15}
          />
        </label>
      </span>
    </Box>
  );
};
