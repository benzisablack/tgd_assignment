'use client';

import { AppDispatch, setUser } from '@/lib/redux/store';
import PersonIcon from '@mui/icons-material/Person';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CustomDialog from './components/dialog';
import GradientButton from './components/gradientButton';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  facebookUrl: string;
  linkedInUrl: string;
  dribbleUrl: string;
}

export default function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      facebookUrl: '',
      linkedInUrl: '',
      dribbleUrl: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (!isChecked) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
      dispatch(
        setUser({
          firstName: data.firstName,
          lastName: data.lastName,
        })
      );
      router.push('/profile');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Avatar sx={{ width: 80, height: 80 }}>
              <PersonIcon sx={{ fontSize: '50px' }} />
            </Avatar>
          </Box>
          <Stack direction='row' spacing={4}>
            <Controller
              name='firstName'
              control={control}
              rules={{
                required: true,
                minLength: 5,
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  label='Firstname'
                  variant='standard'
                  helperText={errors.firstName && 'Invalid field'}
                  error={errors.firstName ? true : false}
                  fullWidth
                  required
                  {...field}
                />
              )}
            />
            <Controller
              name='lastName'
              control={control}
              rules={{
                required: true,
                minLength: 5,
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  label='Lastname'
                  variant='standard'
                  helperText={errors.lastName && 'Invalid field'}
                  error={errors.lastName ? true : false}
                  fullWidth
                  required
                  {...field}
                ></TextField>
              )}
            />
          </Stack>
          <Controller
            name='email'
            control={control}
            rules={{
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }}
            render={({ field, formState: { errors } }) => (
              <TextField
                label='Email'
                variant='standard'
                helperText={errors.email && 'Invalid field'}
                error={errors.email ? true : false}
                {...field}
              ></TextField>
            )}
          />
          <Controller
            name='password'
            control={control}
            rules={{
              required: true,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
            }}
            render={({ field, formState: { errors } }) => (
              <TextField
                label='Password'
                variant='standard'
                type='password'
                helperText={errors.password && 'Invalid field'}
                error={errors.password ? true : false}
                {...field}
              ></TextField>
            )}
          />
          <Controller
            name='facebookUrl'
            control={control}
            rules={{
              pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            }}
            render={({ field, formState: { errors } }) => (
              <TextField
                label='Facebook'
                variant='standard'
                helperText={errors.facebookUrl && 'Invalid field'}
                error={errors.facebookUrl ? true : false}
                {...field}
              ></TextField>
            )}
          />
          <Controller
            name='linkedInUrl'
            control={control}
            rules={{
              pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            }}
            render={({ field, formState: { errors } }) => (
              <TextField
                label='LinkedIn'
                variant='standard'
                helperText={errors.linkedInUrl && 'Invalid field'}
                error={errors.linkedInUrl ? true : false}
                {...field}
              ></TextField>
            )}
          />
          <Controller
            name='dribbleUrl'
            control={control}
            rules={{
              pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            }}
            render={({ field, formState: { errors } }) => (
              <TextField
                label='Dribble'
                variant='standard'
                helperText={errors.dribbleUrl && 'Invalid field'}
                error={errors.dribbleUrl ? true : false}
                {...field}
              ></TextField>
            )}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} sx={{ marginTop: -1 }} />
              }
              sx={{
                alignItems: 'flex-start',
              }}
              label={
                <Typography variant='caption' color='gray'>
                  I&apos;m not intersted in updates about Design Wave School products and services.
                </Typography>
              }
            ></FormControlLabel>
          </FormGroup>
          <GradientButton>SIGN UP</GradientButton>
          <Button variant='text' color='inherit'>
            Return to Sign In
          </Button>
        </Stack>
      </form>
      <CustomDialog
        open={isOpen}
        handleClose={() => setIsOpen(false)}
        message='Please check in checkbox'
      ></CustomDialog>
    </>
  );
}
