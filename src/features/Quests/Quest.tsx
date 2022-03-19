import { Box, Grid, IconButton, styled, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import PendingAction from '@mui/icons-material/PendingActions';

interface IQuest {
  content: string;
  exp: number;
  complete?: boolean;
}

const StyledBox = styled(Box)({
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '4px',
  height: '86px',
  display: 'flex',
  alignItems: 'center'
});

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
  height: '100%',
  padding: '12px 12px 8px 20px'
})

const Quest: React.FC<IQuest> = ({ content, exp, complete }) => {
  return (
    <StyledBox>
      <StyledGrid>
        <Typography>
          {content}
        </Typography>
        <Typography sx={{
          color: "#86A6DF"
        }}>
          {exp}
        </Typography>
      </StyledGrid>
      <IconButton sx={{
        padding: '20px'
      }}>
        {complete ? <DoneIcon sx={{
          height: '36px',
          width: '36px',
          color: '#324E7B'
        }} /> : <PendingAction sx={{
          height: '36px',
          width: '36px',
          color: '#cccccc'
        }} />}
      </IconButton>
    </StyledBox>
  )
};

export default Quest;