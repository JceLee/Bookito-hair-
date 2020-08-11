import React from "react";
import { Card, Row, Col, Button, Divider } from "antd";

export default function ScheduleCard(props) {
    return (
        <Card className="scheduleCard"
            actions={[
                <Button className="scheduleCardEditBtn">Edit Schedule</Button>
            ]}>
            <Row>
                <Col span={4} className="scheduleCardDate">{props.date}</Col>
                <Col span={2}>
                    <Divider type="vertical" className="scheduleCardDivider"/>
                </Col>
                <Col span={18}>
                    <div>Designer: {props.designer}</div>
                    <div>Time: {props.timeStart}-{props.timeEnd}</div>
                    <div>Type: {props.type}</div>
                </Col>
            </Row>
        </Card>
    );
}
