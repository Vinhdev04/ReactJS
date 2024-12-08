import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Bản Tình Ca Mùa Đông",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/5/1/b/851be77c971b5844146d94b3860fc8e2.jpg",
    },
    {
      id: 2,
      name: "Noel Tình yêu",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/d/8/2/ed8212ee1a84e4bb2b4e06172d748766.jpg",
    },
    {
      id: 3,
      name: "Thư Giản",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg",
    },
    {
      id: 4,
      name: "Bên Nhau Bình Yên Thôi",
      thumbnail:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/d/c/b/cdcba8f6026e4e90e33f2d4d4604d515.jpg",
    },
  ];
  return (
    <>
      <h3>Gợi ý dành cho bạn</h3>
      <AlbumList albumList={albumList} />
    </>
  );
}

export default AlbumFeature;
