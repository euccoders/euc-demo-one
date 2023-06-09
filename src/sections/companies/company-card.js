import PropTypes from 'prop-types';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import HandThumbUpIcon from '@heroicons/react/24/solid/HandThumbUpIcon';
import { Avatar, Box, Card, CardContent, Divider, Stack, SvgIcon, Typography, Button } from '@mui/material';

export const CompanyCard = (props) => {
  const { company } = props;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            src={company.logo}
            variant="square"
            sx={{ width: 150, height: 150 }}
          />
        </Box>
        <Typography
          align="center"
          gutterBottom
          variant="h5"
        >
          {company.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {company.description}
        </Typography>
        <Typography>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ flexDirection: 'column', alignItems: 'center', marginRight: '5px' }}>
  <Typography>
    <span style={{ color: 'transparent' }}>Invisible Text</span>
  </Typography>
  <Typography>
    <Button variant="contained">
      {company.monthlyAmount} / Month
    </Button>
  </Typography>
</div>
<div style={{ flexDirection: 'column', alignItems: 'center' }}>
  <Typography align='center'>
    <del>{company.originalAnnualAmount} / Year</del>
  </Typography>
  <Typography>
    <Button variant="contained">
      {company.discountedAnnualAmount} / Year
    </Button>
  </Typography>
</div>
    </div>
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <HandThumbUpIcon />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            {Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000}
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <ArrowDownOnSquareIcon />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            {company.downloads} Downloads
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.object.isRequired
};
