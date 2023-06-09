import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      <Typography variant="body1"> Site <a href="https://github.com/seemywingz/discipuli.ai">GitHub</a>
      </Typography>
      <Typography variant="body1"> Server Built With <a href="https://github.com/seemywingz/makepi">MakePI</a>
      </Typography>
      {'Copyright © '}
      <Link color="inherit" href="https://discipuli.ai/">
        discipuli.ai
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default class StickyFooter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      "header": props.header,
      "body": props.body,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            {this.state.header}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            {this.state.body}
          </Typography>

        </Container>
        <Box component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[999]
                : theme.palette.grey[10],
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </Box>

    );

  }
}