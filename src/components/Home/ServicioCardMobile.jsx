import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

const ServicioCardMobile = ({ titulo, descripcion }) => {
  return (
    <Card >
      <CardContent>
        <Typography
          variant="h6"
          component="div"
        >
          {titulo}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
};

ServicioCardMobile.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

export default ServicioCardMobile;
