import React from "react";
import {Divider} from "antd";

export default function BookitoFooter() {
  return (
    <div className="bookitoFooter">
      <div className="footerContents">
        <p><strong>Support</strong></p>
        <p>How Bookito works</p>
        <p>Investors</p>
        <p>Help Centre</p>
        <p>About US</p>
        <Divider />
        <p>This site is protected by Bookito and the Google Privacy Policy and Terms of Service apply.</p>
        <p>© 2020 Bookito.</p>
      </div>
    </div>
  );
}
