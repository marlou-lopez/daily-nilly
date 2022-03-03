import { Modal, Box, styled, Grid, Typography, Button } from "@mui/material"
import { useModal } from "../../contexts/modal-context"


const style = {
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

export const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 24px 0;
`

interface IModalWrapper {
  title?: string;
}

const ModalWrapper: React.FC<IModalWrapper> = ({ children, title }) => {
  const { state, dispatch } = useModal();

  const handleClose = () => {
    dispatch({
      type: "close",
      modalType: state.modalType
    })
  }

  return (
    <StyledModal open={state.isOpen} onClose={handleClose}>
      <Box sx={style}>
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">
            {title}
          </Typography>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Grid>
        {children}
      </Box>
    </StyledModal>
  )
};

export default ModalWrapper