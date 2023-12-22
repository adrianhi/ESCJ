import { Card, CardContent, Typography } from "@mui/material";
import { serviciosData } from "./Data/ServiciosData";

const ServicioCardMobile = () => {
  return (
    <div>
      {serviciosData.map(({ titulo, descripcion }, key) => (
        <Card key={key}>
          <CardContent>
            <Typography variant="h6" component="div">
              {titulo}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {descripcion}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicioCardMobile;
