'use client';
import { Box, Typography } from '@mui/material';

export default function Landing() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // align left
        gap: '48px',
        p: 0, // no padding
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: '96px',
          fontWeight: 'bold',
          textAlign: 'left',
          display:'inline-block',
          textTransform:'uppercase',
          lineHeight: 1,
        }}
      >
        Software <br />
          <Box component="span" sx={{ color: 'primary.main' }}>
            Engineer
          </Box>
      </Typography>

      <Typography sx={{ fontSize: '18px', color: 'text.secondary' }}>
        Slika so neshto uredeno ovde
      </Typography>
    </Box>
  );
}
