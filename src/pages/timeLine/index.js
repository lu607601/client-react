import React from "react";
import { Timeline } from "antd";
class TimeLine extends React.Component {
  render() {
    return (
      <div className="time-line">
        <Timeline mode="alternate">
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
      </div>
    );
  }
}
export default TimeLine;
