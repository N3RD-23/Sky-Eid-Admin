import React, { useState, useEffect } from "react";
import { Card, Col, Row, Statistic } from 'antd';

const Dashboard = () => {
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
    <div className="Teams" style={{ height: '79vh' }}>
      {/* <h1>Dashboard</h1> */}
      <Row gutter={16}>
    <Col span={12} style={{ marginBottom: '10px' }}>
      <Card bordered={false}>
        <Statistic
          title="Total Teams"
          value={teams.length}
          valueStyle={{ color: '#3f8600' }}
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Expected Number of Teams"
          value={10}
          valueStyle={{ color: '#cf1322' }}
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Total Players"
          value={teams.length * 4}
          valueStyle={{ color: '#3f8600' }}
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Expected Number of Players"
          value={40}
          valueStyle={{ color: '#cf1322' }}
        />
      </Card>
    </Col>
  </Row>
    </div>
  );
};

export default Dashboard;
