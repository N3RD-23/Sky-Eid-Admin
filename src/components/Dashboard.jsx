import React, { useState, useEffect } from "react";
import { Card, Col, Row, Typography } from "antd";
import { useSpring, animated } from "react-spring";

const { Title } = Typography;

const titleStyle = {
  color: '#808080'
}

const textStyle = {
  color: '#00A36C'
}

const Dashboard = () => {
  const Teams = () => {
    const { number } = useSpring({
      from: { number: 0 },
      number: teams.length,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };

  const Players = () => {
    const { number } = useSpring({
      from: { number: 0 },
      number: teams.length*4,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };

  const ExpectedNumber = () => {
    const { number } = useSpring({
      from: { number: 0 },
      number: 15,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };

  const ExpectedPlayers = () => {
    const { number } = useSpring({
      from: { number: 0 },
      number: 40,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };

  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("https://api.sky.ngo/players")
      .then((res) => {
        return res.json();
      })
      .then((teams) => {
        console.log(teams);
        setTeams(teams);
      });
  }, []);

  return (
    <div className="Teams" style={{ height: "79vh" }}>
      {/* <h1>Dashboard</h1> */}
      <Row gutter={16}>
        <Col span={12} style={{ marginBottom: "10px" }}>
          <Card bordered={false}>
            <Title level={3} style={titleStyle}>Total Teams</Title>
            <Title level={3} style={textStyle}><Teams /></Title>
          </Card>
        </Col>
        <Col span={12} style={{ marginBottom: "10px" }}>
          <Card bordered={false}>
            <Title level={3} style={titleStyle}>Expected Number of Teams</Title>
            <Title level={3} style={textStyle}><ExpectedNumber /></Title>
          </Card>
        </Col>
        <Col span={12} style={{ marginBottom: "10px" }}>
          <Card bordered={false}>
            <Title level={3} style={titleStyle}>Total Players</Title>
            <Title level={3} style={textStyle}><Players /></Title>
          </Card>
        </Col>
        <Col span={12} style={{ marginBottom: "10px" }}>
          <Card bordered={false}>
            <Title level={3} style={titleStyle}>Expected Number of Players</Title>
            <Title level={3} style={textStyle}><ExpectedPlayers /></Title>
          </Card>
        </Col>
        
      </Row>
    </div>
  );
};

export default Dashboard;
