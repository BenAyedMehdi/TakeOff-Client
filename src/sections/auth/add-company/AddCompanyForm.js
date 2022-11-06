import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Grid, Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function AddCompanyForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="name" label="Company name" />
        <TextField name="punchline" label="Punchline" />
        <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
          Add company
        </LoadingButton>
      </Stack>
    </>
  );
}
