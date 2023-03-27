import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function HataFooterBar() {
    
    return(
        <Stack direction="row" spacing={2}>
        <Button size='large'  variant="outlined">ÇIKIŞ</Button>
        <Button size='large' variant="outlined">MODEL İLK RESMİ</Button>
        <Button size='large' variant="outlined" startIcon={<ArrowBackIosIcon />}>  GERİ</Button>
        <Button size='large' variant="outlined">HATA LİSTESİ</Button>
        <Button size='large' variant="outlined">TEMİZLE</Button>
        <Button size='large'  variant="outlined" href="#contained-buttons">
          BÜYÜK FONT
        </Button>
      </Stack>
    )
}