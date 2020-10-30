import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  console.log((user?.images[0])?user.images[0].url:'b')
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={(user?.images[0])?user?.images[0].url:'https://uplay-avatars.s3.amazonaws.com/d840aae8-60ec-4830-9465-da5e1c16ae59/default_256_256.png'} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
