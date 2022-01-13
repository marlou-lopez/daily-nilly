import { Box } from "@mui/material";

const TestLayout = () => {
  return (
    <>
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
            width: "80px",
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
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "flex-end",
                  marginRight: "16px",
                }}
              >
                <Box
                  sx={{
                    width: "80px",
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
                          backgroundColor: "red",
                          padding: "0 16px",
                          width: "80px",
                        }}
                      >
                        <Box
                          sx={{
                            margin: 0,
                            padding: 0,
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            test
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            test
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            test
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            test
                          </Box>{" "}
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            test
                          </Box>{" "}
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            test
                          </Box>{" "}
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            test
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Main */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "flex-start",
          paddingTop: "72px",
        }}
      >
        <Box
          sx={{
            width: "952px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              margin: 0,
              padding: 0,
              outline: "none",
              width: "608px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "red",
                borderRadius: "16px",
                padding: "16px",
                marginBottom: "8px",
                position: "fixed",
                top: "72px",
                zIndex: "200",
                width: "608px",
              }}
            ></Box>
            <Box
              sx={{
                marginBottom: "8px",
                height: "56px",
              }}
            >
              <Box
                sx={{
                  width: "608px",
                  position: "fixed",
                  top: "125px",
                  zIndex: "200",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "red",
                    borderRadius: "16px",
                  }}
                >
                  <Box
                    sx={{
                      height: "56px",
                      padding: "0 16px",
                      display: "flex",
                    }}
                  >
                    test
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                boxSizing: "border-box",
                margin: 0,
                padding: "100px 0 0",
                outline: "none",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "8px",
                    padding: "16px",
                    backgroundColor: "red",
                    borderRadius: "16px",
                    height: 200,
                  }}
                ></Box>
                <Box
                  sx={{
                    marginBottom: "8px",
                    padding: "16px",
                    backgroundColor: "red",
                    borderRadius: "16px",
                    height: 200,
                  }}
                ></Box>
                <Box
                  sx={{
                    marginBottom: "8px",
                    padding: "16px",
                    backgroundColor: "red",
                    borderRadius: "16px",
                    height: 200,
                  }}
                ></Box>
                <Box
                  sx={{
                    marginBottom: "8px",
                    padding: "16px",
                    backgroundColor: "red",
                    borderRadius: "16px",
                    height: 200,
                  }}
                ></Box>
                <Box
                  sx={{
                    marginBottom: "8px",
                    padding: "16px",
                    backgroundColor: "red",
                    borderRadius: "16px",
                    height: 200,
                  }}
                ></Box>
                <Box
                  sx={{
                    marginBottom: "8px",
                    padding: "16px",
                    backgroundColor: "red",
                    borderRadius: "16px",
                    height: 200,
                  }}
                ></Box>
                <Box
                  sx={{
                    marginBottom: "8px",
                    padding: "16px",
                    backgroundColor: "red",
                    borderRadius: "16px",
                    height: 200,
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "328px",
            }}
          >
            <Box
              sx={{
                paddingBottom: "80px",
                width: "328px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "red",
                  borderRadius: "16px",
                }}
              >
                test
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TestLayout;
