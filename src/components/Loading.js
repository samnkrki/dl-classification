import { Backdrop } from '@mui/material';
import { ProgressComponent } from './Progress';
import PropTypes from 'prop-types'

export function LoadingComponent({isOpen, handleClose}) {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isOpen} onClick={handleClose}>
      <ProgressComponent />
    </Backdrop>
  );
}

LoadingComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func
};
