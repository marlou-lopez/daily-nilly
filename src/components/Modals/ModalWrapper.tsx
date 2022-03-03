import { Modal, Box, styled } from "@mui/material"
import { useModal } from "../../contexts/modal-context"


const style = {
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
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
  align-items: center;
  justify-content: center;
`

const ModalWrapper: React.FC = ({ children }) => {
  const { state, dispatch } = useModal();
  return (
    <StyledModal open={state.isOpen} onClose={() => dispatch({
      type: "close",
      modalType: state.modalType
    })}>
      <Box sx={style}>
        {children}
      </Box>
    </StyledModal>
  )
};

export default ModalWrapper