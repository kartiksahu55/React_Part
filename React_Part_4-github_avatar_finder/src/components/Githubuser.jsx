import { useEffect, useState } from "react";
import style from "./Githubuser.module.css";
import useDebounce from "../hooks/useDebounce";

const Githubuser = () => {
  const [userGithubData, setUserGithubData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const submitGithubUser = async () => {
    if (searchTerm) {
      const response = await fetch(
        `https://api.github.com/users/${searchTerm}`
      );

      const data = await response.json();
      console.log(data);
      setUserGithubData(data);
    }
  };

  useEffect(() => {
    submitGithubUser();
  }, [searchTerm]);

  console.log(searchTerm);

  return (
    <div className={style.gitUser_Container}>
      <h2 className={style.gitUser_Heading}>Github User Avatar</h2>
      <div className={style.gitUser_Search}>
        <input
          type="search"
          id="searchTerm"
          placeholder="Enter Github User ID"
          onChange={useDebounce((e) => setSearchTerm(e.target.value))}
        />
      </div>
      <div className={style.gitUser_Details}>
        <div className={style.gitUser_Avatar}>
          <img
            src={
              userGithubData.avatar_url ||
              "https://avatars.githubusercontent.com/u/55272176?v=4"
            }
            alt=""
          />
        </div>
        {searchTerm && <input type="text" value={userGithubData.login} className={style.gitUserId} />}
      </div>
    </div>
  );
};

export default Githubuser;
