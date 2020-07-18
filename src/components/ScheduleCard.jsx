import React from "react";
import { Card, Row, Col, Button, Divider } from "antd";

export default function ScheduleCard(props) {
    return (
        <Card id="scheduleCard"
            style={{
                'borderRadius': '12px',
                'borderStyle': 'solid',
                'borderColor': 'rgb(165, 165, 165)',
                'borderWidth': '1.5px'
            }}>
            <Row>
                <Col span={4}>Jul 17</Col>
                <Col span={2} className="colVerticalDivider">
                    <Divider type="vertical" 
                        style={{ 
                            'height': '90%',
                            'margin': '0 auto' }}/>
                </Col>
                <Col span={18}>
                    <div>Designer: {props.designer}</div>
                    <div>Time: {props.timeStart}-{props.timeEnd}</div>
                    <div>{props.type}</div>
                    <Button className="scheduleCardEditBtn"
                        style={{
                            'backgroundColor': 'rgb(36,36,36)',
                            'color': 'white',
                            'borderRadius': '10px'
                        }}>Edit Schedule</Button>
                </Col>
            </Row>
        </Card>
    );
}
