import { InsertPhoto } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';

export function ImageUploadButton({  onChange }) {
  return (
    <IconButton size="large" color="primary" aria-label="upload image" component="label" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
      <input hidden accept="image/*" type="file" onChange={onChange} />
      <InsertPhoto />
    </IconButton>
  );
}

ImageUploadButton.propTypes = {
  onChange: PropTypes.func
};
