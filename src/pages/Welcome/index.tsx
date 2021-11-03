import {Component} from 'react';
import { Typography } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Card, Col, Row} from 'antd';
import {GetImgList,} from "@/services/ant-design-pro/api";
import Images from './components/Images';
// const CodePreview: React.FC = ({ children }) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );
// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   weight:'20px',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
//
// };

const { Title} = Typography;
class Index extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col  lg={4} md={24}>

          </Col>
          <Col  lg={16} md={24}>
            <Card>
              <Images />
            </Card>
            <Card>
              <Typography>
                <Title>报告厅、会议室网上预约管理规定</Title>
                <Title level={4}> 为规范和加强报告厅、会议室使用与管理，提高使用效率，报告厅、会议室实行网上预约管理，特制订本规定如下：</Title>
                <Title level={5}> 1、报告厅、会议室实行网上预约使用与管理。 </Title>
                <br/>
                <Title level={5}> 2、报告厅、会议室预约时段为：8:00-12:00，14:00-18:00， 19:00-22:00，超时段使用应在预约登记时做好备注说明。(提示：预约时间必须落在系统划定时间段内，时间需按照系统原有时间格式输入） </Title>
                <br/>
                <Title level={5}> 3、如报告厅、会议室多媒体设备使用前发生故障、损坏或配件丢失，要及时上报党政综合办公室，未及时上报发现后责任一律由最后使用人承担。 </Title>
                <br/>
                <Title level={5}> 4、其他特殊情况或特殊需要用户可联系综合办公室，办公电话：029-87092262。 </Title>
              </Typography>
            </Card>
            <Card>
              <Typography>
                <Title>报告厅、会议室网上预约管理规定</Title>
                <Title level={4}> 为规范和加强报告厅、会议室使用与管理，提高使用效率，报告厅、会议室实行网上预约管理，特制订本规定如下：</Title>
                <Title level={5}> 1、报告厅、会议室实行网上预约使用与管理。 </Title>
                <br/>
                <Title level={5}> 2、报告厅、会议室预约时段为：8:00-12:00，14:00-18:00， 19:00-22:00，超时段使用应在预约登记时做好备注说明。(提示：预约时间必须落在系统划定时间段内，时间需按照系统原有时间格式输入） </Title>
                <br/>
                <Title level={5}> 3、如报告厅、会议室多媒体设备使用前发生故障、损坏或配件丢失，要及时上报党政综合办公室，未及时上报发现后责任一律由最后使用人承担。 </Title>
                <br/>
                <Title level={5}> 4、其他特殊情况或特殊需要用户可联系综合办公室，办公电话：029-87092262。 </Title>
              </Typography>
            </Card>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Index;
