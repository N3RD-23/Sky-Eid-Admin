import React, { useState, useEffect } from "react";
import { Card, Row, Col, Typography } from "antd";

const { Title } = Typography;

const TeamInfoCard = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("https://api.sky.ngo/players")
      .then((res) => {
        return res.json();
      })
      .then((teams) => {
        // console.log(data);
        setTeams(teams);
      });
  }, []);

  return (
    <div>
        <Row gutter={16}>
            {teams.map((team) => (
                <Col span={8} style={{ marginBottom: '1.1vw' }}>
                    <Card title={<Title level={3} type="danger">{team.team_name}</Title>} style={{ height: "auto" }}>
                        <p><span style={{ fontWeight: 'bold' }}>IGL : </span>{team.f_name}</p>
                        <p><span style={{ fontWeight: 'bold' }}>NID : </span>{team.nid}</p>
                        <p><span style={{ fontWeight: 'bold' }}>Phone No : </span>{team.viber_number}</p>
                        <p><span style={{ fontWeight: 'bold' }}>Email : </span>{team.email}</p>
                        <Card className="text-left" title="Player 1" bordered={false} style={{ marginTop: '10px' }}>
                            <p>Name : {team.p1_fullname}</p>
                            <p>ID No : {team.p1_nid}</p>
                            <p>PUBG ID : {team.p1_ign}</p>
                            <p>In-Game ID : {team.p1_igid}</p>
                        </Card>
                        <Card className="text-left" title="Player 2" bordered={false} style={{ marginTop: '10px' }}>
                            <p>Name : {team.p2_fullname}</p>
                            <p>ID No : {team.p2_nid}</p>
                            <p>PUBG ID : {team.p2_ign}</p>
                            <p>In-Game ID : {team.p2_igid}</p>
                        </Card>
                        <Card className="text-left" title="Player 3" bordered={false} style={{ marginTop: '10px' }}>
                            <p>Name : {team.p3_fullname}</p>
                            <p>ID No : {team.p3_nid}</p>
                            <p>PUBG ID : {team.p3_ign}</p>
                            <p>In-Game ID : {team.p3_igid}</p>
                        </Card>
                        <Card className="text-left" title="Player 4" bordered={false} style={{ marginTop: '10px' }}>
                            <p>Name : {team.p4_fullname}</p>
                            <p>ID No : {team.p4_nid}</p>
                            <p>PUBG ID : {team.p4_ign}</p>
                            <p>In-Game ID : {team.p4_igid}</p>
                        </Card>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
  );
};

export default TeamInfoCard;
