import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./header.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="topRight">
          <div className="select">
            <select className="itemSelect" name="admin" id="admin">
              <option value="admin">admin</option>
            </select>
            <Stack direction="row" spacing={2}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar style={{ background: "#001EB9", color: "#001EB9" }} />
              </StyledBadge>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
