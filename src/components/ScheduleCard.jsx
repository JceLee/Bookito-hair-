import React from "react";
import { Card, Row, Col, Button, Divider } from "antd";
import "../assets/css/ScheduleCard.scss";

export default function ScheduleCard(props) {
    return (
        <Card className="scheduleCard">
            <Row>
                <Col span={4}>{props.date}</Col>
                <Col span={2}>
                    <Divider type="vertical" className="scheduleCardDivider"/>
                </Col>
                <Col span={18}>
                    <div>Designer: {props.designer}</div>
                    <div>Time: {props.timeStart}-{props.timeEnd}</div>
                    <div>{props.type}</div>
                    <Button className="scheduleCardEditBtn">Edit Schedule</Button>
                </Col>
            </Row>
        </Card>
    );
}
