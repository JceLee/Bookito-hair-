import React from "react";
import { Card, Row, Col, Button, Divider } from "antd";

export default function ScheduleCardHistory(props) {
    const { date, name, timeStart, timeEnd, types} = props;
    return (
        <Card className="scheduleCard"
            actions={[
                <>
                <Button type="text" className="scheduleCardReviewBtn">Review</Button>
                <Button type="text" className="scheduleCardRebookBtn">Rebook</Button>
                </>
            ]}>
            <Row>
                <Col span={4} className="scheduleCardDate">{date}</Col>
                <Col span={2}>
                    <Divider type="vertical" className="scheduleCardDivider"/>
                </Col>
                <Col span={18}>
                    <div>Designer: {name}</div>
                    <div>Time: {timeStart}-{timeEnd}</div>
                    <div>Type: {
                        types.map((type, index) => 
                            <span key={index}>{type} </span>
                        )}</div>
                </Col>
            </Row>
        </Card>
    );
}
