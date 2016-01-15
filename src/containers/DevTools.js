import React from 'react';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';

const DevTools = createDevTools(
  <LogMonitor theme="solarized" />
);

export default DevTools;
