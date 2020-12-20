import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { DropDownItem } from '../DropDownItem'

const DropDown = ({ taskId, status, dispatch, idCurrentUser }) => {
  return (
    <Dropdown
      overlay={DropDownItem({ taskId, status, dispatch, idCurrentUser })}
      placement="bottomRight"
      trigger="click">
      <DownOutlined />
    </Dropdown>
  )
}
export default DropDown
