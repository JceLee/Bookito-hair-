import React, { useState, useEffect } from "react";
import { Checkbox, Divider, Row, Col } from "antd";

export default function DesignerListFilterTags(props) {
    const { filterTags, setCurrentCheckedTags } = props;

    useEffect(() => {
        setCurrentCheckedTags(filterTags);
    }, []);

    const onChange = list => {
        setCurrentCheckedTags(list);
    };

    return (
        <div className="designerListFilterTags">
            <Checkbox.Group onChange={onChange} defaultValue={filterTags}>
                <Row>
                    {filterTags.map((tag, i) => (
                        <Col key={`designerListFilterTag${i}`} span={8}>
                            <Checkbox value={tag} onChange={onChange}>{tag}</Checkbox>
                        </Col>
                    ))}
                </Row>
            </Checkbox.Group>
        </div>
    );
}
