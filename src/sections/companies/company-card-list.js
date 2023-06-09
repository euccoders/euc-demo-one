import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { CompanyCard } from 'src/sections/companies/company-card';

export const CompanyCardList = (props) => {
  const { companies } = props;

  return (
    <Box
      sx={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {companies.map((company, index) => (
        <Box key={index} sx={{ display: 'inline-block', marginRight: '16px' }}>
          <CompanyCard company={company} />
        </Box>
      ))}
    </Box>
  );
};

CompanyCardList.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
};