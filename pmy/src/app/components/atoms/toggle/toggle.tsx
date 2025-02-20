import React, { useCallback, useRef } from 'react';
import Box from '@/components/layouts/Box/Box';
import { switcher, switcherInput, switcherLabel } from './index.css';
import * as theme from '@/utils/theme';

export const Toggle = ({ changeTheme }) => {
  const _theme = theme.getTheme();
  return (
    <Box marginTop={10}>
      <span className={switcher}>
        <input
          ref={useCallback(
            (node: HTMLInputElement | null) => {
              node && (node.checked = _theme === 'light');
            },
            [_theme],
          )}
          type="checkbox"
          id="switcher"
          className={switcherInput}
          onChange={changeTheme}
        />
        <label htmlFor="switcher" className={switcherLabel}></label>
      </span>
    </Box>
  );
};
