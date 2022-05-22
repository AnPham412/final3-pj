//

import Card from './Card';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Typography from './Typography';
import CssBaseline from './CssBaseline';


// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Card(theme),
    Input(theme),
    Paper(theme),
    Button(theme),
    Tooltip(theme),
    Typography(theme),
    CssBaseline(theme),
  );
}
