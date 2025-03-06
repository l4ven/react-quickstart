import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/search?q=${encodeURIComponent(keyword)}`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.HeadCont>
      <S.InnerBox>
        <Link to={"/"}>
          <S.HeadLogo src="" alt="Logo" />
        </Link>
        <S.InputCont>
          <S.InputBox>
            <S.HeadInput
              type="text"
              placeholder="placeholder"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <S.HeadBtn onClick={handleSearch}>검색</S.HeadBtn>
          </S.InputBox>
        </S.InputCont>
        <img src="" alt="Button" />
      </S.InnerBox>
    </S.HeadCont>
  );
};
export default Header;
