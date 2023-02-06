import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Dtitle from '@site/src/components/Dtitle';
import Tfield from '@site/src/components/Tfield';
import Dfield from '@site/src/components/Dfield';
import Lfield from '@site/src/components/Lfield';
import Sfield from '@site/src/components/Sfield';
import Cbox from '@site/src/components/Cbox';
import Value from '@site/src/components/Value';
import Key from '@site/src/components/Key';
import Button from '@site/src/components/Button';
import DMCommand from '@site/src/components/DMCommand';
import ACommand from '@site/src/components/ACommand';
import Sparam from '@site/src/components/Sparam';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  dtitle: Dtitle,
  tfield: Tfield,
  dfield: Dfield,
  lfield: Lfield,
  sfield: Sfield,
  cbox: Cbox,
  value: Value,
  key: Key,
  but: Button,
  dmcommand: DMCommand,
  acommand: ACommand,
  sparam: Sparam,
};