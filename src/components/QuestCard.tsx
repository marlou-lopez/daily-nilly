import { Button, Card } from "@mui/material";

const QuestCard: React.FC = ({children}) => {
  return (
    <Card variant="outlined" sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 2,
      mb: 1,
    }}>
      {children}
      <Button variant="contained">Claim</Button>
    </Card>
  )
};

export default QuestCard;