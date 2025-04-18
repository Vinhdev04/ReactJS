import { Col, Row } from "antd";
import React from "react";
import CardItem from "../CardItem";
import "./style.css";
function GridLayout(props) {
  return (
    <>
      {/* <Row gutter={[10, 20]}>
        <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={24}>
          <div className="box">Col</div>
        </Col>
        <Col xxl={4} xl={4} lg={3} md={6} sm={12} xs={24}>
          <div className="box">Col</div>
        </Col>
        <Col xxl={8} xl={8} lg={9} md={6} sm={12} xs={24}>
          <div className="box">Col</div>
        </Col>
        <Col xxl={10} xl={10} lg={9} md={6} sm={12} xs={24}>
          <div className="box">Col</div>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={12}>
          <div className="block">col-12</div>
        </Col>
        <Col span={4}>
          <div className="block">col-4</div>
        </Col>
        <Col span={4}>
          <div className="block">col-4</div>
        </Col>
        <Col span={4}>
          <div className="block">col-4</div>
        </Col>
      </Row> */}

      <Row gutter={[20, 20]}>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box 1" />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box 5" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 6" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 7" style={{ height: "400px" }} />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box 8" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 9" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 10" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 11" style={{ height: "400px" }} />
        </Col>
      </Row>
    </>
  );
}

export default GridLayout;
