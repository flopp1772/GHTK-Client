import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project imports
import MainCard from '@/mantisAdmin/components/MainCard';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

export default function AuthCard({ children, ...other }) {
  const theme = useTheme();

  return (
    <MainCard
      sx={{ maxWidth: { xs: 400, sm: 475 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={theme.customShadows.z1}
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </MainCard>
  );
}

AuthCard.propTypes = { children: PropTypes.any, other: PropTypes.any };
