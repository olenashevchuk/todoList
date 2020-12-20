import {
  DeleteOutlined,
  ExclamationOutlined,
  PushpinOutlined
} from '@ant-design/icons'

const dropDownItemButtons = [
  {
    textStatus: 'Pinned',
    icon: PushpinOutlined,
    type: 'PINNED_TODO'
  },
  {
    textStatus: 'Important',
    icon: ExclamationOutlined,
    type: 'IMPORTANT_TODO'
  },
  {
    textStatus: 'Delete',
    icon: DeleteOutlined,
    type: 'DELETE_TODO',
    color: 'red'
  }
]
export default dropDownItemButtons
