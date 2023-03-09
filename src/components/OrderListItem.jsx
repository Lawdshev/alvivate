import { Avatar, List, Typography, Button } from 'antd';
import { PlusOutlined, ShopOutlined, MinusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import pot from '../Assets/Vector.svg'

const { Title, Text } = Typography;

const OrderListItem = ({ merchantName, date, items }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleOrderClick = () => {
        setShowDetails(!showDetails);
    }

    return (
      <div>
        <List.Item>
          <List.Item.Meta
            title={
              <div className='flex justify-between items-center'>
                <div className='flex items-center  w-[60%]'>
                  {/* <Avatar style={{ backgroundColor: '#FFE55F' }} icon={<img className='text-black' src={pot} />} /> */}
                  <div className='h-[24px] w-[24px] bg-[#FFF2C2] flex items-center justify-center rounded-[3px]'>
                    <img className='w-[12px]' src={pot} />
                  </div>
                  <span className='ml-[8%] text-[1vw]'>{merchantName}</span>
                </div>
                <span className='flex items-center'>
                  <span className='mr-[0.5vw] text-[0.8vw]'>{date}</span>
                  <button
                    className=' flex items-center justify-center text-[0.8vw]'
                    onClick={handleOrderClick}>
                    {!showDetails ? <PlusOutlined /> : <MinusOutlined />}
                  </button>
                </span>
              </div>
            }
          />
        </List.Item>
        {showDetails && (
          <div className='flex justify-between px-[10%]'>
            <div>
              {items.map((item) => {
                return (
                  <span className='flex text-[0.8vw] mt-[0.3vw] '>
                    <span>{item.qty}x</span>
                    <span className='ml-[8px] '>{item.name}</span>
                  </span>
                );
              })}
            </div>
            <div className='flex flex-col justify-between'>
              <span id='time' className='text-[10px]'>
                13:09
              </span>
              <span id='price' className='text-[12px]'>
                £29.9
              </span>
            </div>
          </div>
        )}
      </div>
    );
}
export default OrderListItem