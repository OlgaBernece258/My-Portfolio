import { styled } from "@mui/material";
import Button from "@mui/material/Button";

const BoldBlackButton = styled(Button)(() => ({
  backgroundColor: '#f2f',
  color: '#fff',
  padding: '12px 28px',
  borderRadius: '30px',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#000',
    transform: 'scale(1.05)',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.5)',
  },
}));

export default BoldBlackButton;