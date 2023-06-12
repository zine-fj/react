import React from "react";
import { Header, Content, Footer } from "../components/public/index";
import { useSearchParams } from "react-router-dom";

export default function DetailPage() {
  const [search] = useSearchParams();
  const imgSrc = search.get("src");
  const id = search.get("id");

  console.log(id, imgSrc);
  return (
    <div>
      <Header rightCont={"分享"}>详情页面</Header>
      <Content>
        <img src={imgSrc} alt="" style={{ width: "100%" }} />
      </Content>
      <Footer></Footer>
    </div>
  );
}
