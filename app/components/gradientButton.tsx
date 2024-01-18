import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #3dc6d1 25%, #73ed82 75%);
  border-radius: 40px;
  border: 0;
  color: white;
  height: 48px;
  box-shadow: 0 3px 5px 2px rgba(33, 150, 243, 0.3);

  &:hover {
    box-shadow: 0 6px 10px 4px rgba(33, 150, 243, 0.3);
  }
`;

export default function GradientButton({ children }: { children: React.ReactNode }) {
  return (
    <StyledButton variant='contained' type='submit'>
      {children}
    </StyledButton>
  );
}
