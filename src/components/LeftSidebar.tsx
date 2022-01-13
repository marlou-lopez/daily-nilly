import { Box, Link } from "@mui/material";

const LeftSidebar: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-end",
        marginRight: "16px",
      }}
    >
      <Box
        sx={{
          width: "232px",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "72px",
            height: "calc(100vh - 72px)",
            zIndex: 800,
          }}
        >
          <Box
            sx={{
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Box
              sx={{
                borderRadius: "16px",
                backgroundColor: "#fff",
                padding: "0 16px",
                width: "232px",
              }}
            >
              <Box>
                <Box sx={{
                  padding: "4px 0"
                }}>
                  <Link
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "48px",
                      margin: "0 -12px",
                      padding: "0 12px",
                      cursor: "pointer",
                      borderRadius: "16px",
                      ":hover": {
                        bgcolor: "#eff2ff",
                      },
                    }}
                  >
                    Home
                  </Link>
                </Box>
                <Box sx={{
                  padding: "4px 0"
                }}>
                  <Link
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "48px",
                      margin: "0 -12px",
                      padding: "0 12px",
                      cursor: "pointer",
                      borderRadius: "16px",
                      ":hover": {
                        bgcolor: "#eff2ff",
                      },
                    }}
                  >
                    Quests
                  </Link>
                </Box>
                <Box sx={{
                  padding: "4px 0"
                }}>
                  <Link
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "48px",
                      margin: "0 -12px",
                      padding: "0 12px",
                      cursor: "pointer",
                      borderRadius: "16px",
                      ":hover": {
                        bgcolor: "#eff2ff",
                      },
                    }}
                  >
                    Profile
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSidebar;
