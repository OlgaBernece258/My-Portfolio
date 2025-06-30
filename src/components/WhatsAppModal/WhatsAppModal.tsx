import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, IconButton, Box, Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface WhatsAppModalProps {
  open: boolean;
  onClose: () => void;
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const fullMessage = `Olá, meu nome é ${formData.name}. ${formData.message}`;
    const encoded = encodeURIComponent(fullMessage);
    const phoneNumber = '258847864648'; 
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Fale comigo no WhatsApp</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField
            name="name"
            label="Seu nome"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="message"
            label="Sua mensagem"
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
            fullWidth
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" color="success" onClick={sendToWhatsApp}>
          Enviar no WhatsApp
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WhatsAppModal;