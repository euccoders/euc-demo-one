import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

const states = [
  {
    "value": "alabama",
    "label": "Alabama"
  },
  {
    "value": "alaska",
    "label": "Alaska"
  },
  {
    "value": "arizona",
    "label": "Arizona"
  },
  {
    "value": "arkansas",
    "label": "Arkansas"
  },
  {
    "value": "california",
    "label": "California"
  },
  {
    "value": "colorado",
    "label": "Colorado"
  },
  {
    "value": "connecticut",
    "label": "Connecticut"
  },
  {
    "value": "delaware",
    "label": "Delaware"
  },
  {
    "value": "florida",
    "label": "Florida"
  },
  {
    "value": "georgia",
    "label": "Georgia"
  },
  {
    "value": "hawaii",
    "label": "Hawaii"
  },
  {
    "value": "idaho",
    "label": "Idaho"
  },
  {
    "value": "illinois",
    "label": "Illinois"
  },
  {
    "value": "indiana",
    "label": "Indiana"
  },
  {
    "value": "iowa",
    "label": "Iowa"
  },
  {
    "value": "kansas",
    "label": "Kansas"
  },
  {
    "value": "kentucky",
    "label": "Kentucky"
  },
  {
    "value": "louisiana",
    "label": "Louisiana"
  },
  {
    "value": "maine",
    "label": "Maine"
  },
  {
    "value": "maryland",
    "label": "Maryland"
  },
  {
    "value": "massachusetts",
    "label": "Massachusetts"
  },
  {
    "value": "michigan",
    "label": "Michigan"
  },
  {
    "value": "minnesota",
    "label": "Minnesota"
  },
  {
    "value": "mississippi",
    "label": "Mississippi"
  },
  {
    "value": "missouri",
    "label": "Missouri"
  },
  {
    "value": "montana",
    "label": "Montana"
  },
  {
    "value": "nebraska",
    "label": "Nebraska"
  },
  {
    "value": "nevada",
    "label": "Nevada"
  },
  {
    "value": "new-hampshire",
    "label": "New Hampshire"
  },
  {
    "value": "new-jersey",
    "label": "New Jersey"
  },
  {
    "value": "new-mexico",
    "label": "New Mexico"
  },
  {
    "value": "new-york",
    "label": "New York"
  },
  {
    "value": "north-carolina",
    "label": "North Carolina"
  },
  {
    "value": "north-dakota",
    "label": "North Dakota"
  },
  {
    "value": "ohio",
    "label": "Ohio"
  },
  {
    "value": "oklahoma",
    "label": "Oklahoma"
  },
  {
    "value": "oregon",
    "label": "Oregon"
  },
  {
    "value": "pennsylvania",
    "label": "Pennsylvania"
  },
  {
    "value": "rhode-island",
    "label": "Rhode Island"
  },
  {
    "value": "south-carolina",
    "label": "South Carolina"
  },
  {
    "value": "south-dakota",
    "label": "South Dakota"
  },
  {
    "value": "tennessee",
    "label": "Tennessee"
  },
  {
    "value": "texas",
    "label": "Texas"
  },
  {
    "value": "utah",
    "label": "Utah"
  },
  {
    "value": "vermont",
    "label": "Vermont"
  },
  {
    "value": "virginia",
    "label": "Virginia"
  },
  {
    "value": "washington",
    "label": "Washington"
  },
  {
    "value": "west-virginia",
    "label": "West Virginia"
  },
  {
    "value": "wisconsin",
    "label": "Wisconsin"
  },
  {
    "value": "wyoming",
    "label": "Wyoming"
  }
];

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: 'Anika',
    lastName: 'Visser',
    email: 'demo@devias.io',
    phone: '',
    state: 'los-angeles',
    country: 'USA'
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
