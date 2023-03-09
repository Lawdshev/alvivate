import { Divider, List, Input, Space, Table, Checkbox } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from 'react'
import OrderListItem from '../components/OrderListItem'
import SideNav from "../components/SideNav";
import { useNavigate } from "react-router-dom";
import logo from '../Assets/White logo.svg';
import moment from 'moment';
import { useUserAuth } from "../utilities/UserAuthContextProvider";


function Dashboard() {

    //   const {AdminTransactions} = useUserAuth()
    const { AdminTransactions,user } = useUserAuth()

    const customInputStyle = {
        width: "30%",
        border: "none",
        borderBottom: "1px solid #ccc",
    };

    const customIconStyle = {
        color: "#C5C5C5",
    };

    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }


    const orders = [
        { merchantName: 'Merchant 1', date: 'Mar 5', id: 1, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 2', date: 'Feb 7', id: 2, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
        { merchantName: 'Merchant 3', date: 'Jun 9', id: 3, store: [{ qty: 2, name: ' 2L Edika ikong' }, { qty: 3, name: ' 1L Eforiro' }] },
    ];



    const columns = [
        {
            title: () => <Checkbox disabled />,
            width: "5%",
            align: "center",
            key: "check",
            render: (text, item) => {
                return (
                    <>
                        <Checkbox></Checkbox>
                    </>
                );
            },
        },
        {
            title: "Reference",
            width: "13%",
            key: "reference",
            align: "left",
            dataIndex: "reference",
            render: (text) => (
                <span className='text-[#0038FD] underline text-[10px] md:text-[13px] xl:text-[15px]'>
                    {text}
                </span>
            ),
        },
        {
            title: "Date ",
            width: "20%",
            align: "left",
            key: "created_at",
            dataIndex: "created_at",
            render: (text) => (moment(text).format("DD-MM-YYYY hh:mmA")),
        },
        {
            title: "Amount",
            width: "15%",
            align: "center",
            dataIndex: "amount",
            key: "amount",
            render: (text) => (
                <span className='font-normal text-[#282828] text-[10px] md:text-[13px] xl:text-[15px]'>
                    ₦{text / 100}
                </span>
            ),
        },
        {
            title: "Status",
            width: "13%",
            align: "left",
            dataIndex: "status",
            key: "status",
            render: (text) => (
                <>
                    {text === "success" && (
                        <div className='flex text-[#27AE60] font-poppins text-[10px] md:text-[13px] xl:text-[15px] font-normal'>
                            {" "}
                            <span>{text}</span>
                        </div>
                    )}
                    {text === "failed" && (
                        <div className='flex text-[#E32021] font-poppins text-[10px] md:text-[13px] xl:text-[15px] font-normal'>
                            {" "}
                            <span>{text}</span>
                        </div>
                    )}
                    {text === "abandoned" && (
                        <div className='flex text-[#D8B70E] font-poppins text-[7px] md:text-[10px] xl:text-[12px] font-normal'>
                            {" "}
                            <span>{text}</span>
                        </div>
                    )}
                </>
            ),
        },
    ];


    const dataSource = AdminTransactions.map((transaction) => {
        return {
            created_at: transaction.created_at,
            amount: transaction.amount,
            status: transaction.status,
            reference: transaction.reference,
        };
    });
    const [searchText, setSearchText] = useState('')
    const [filteredData, setFilteredData] = useState(dataSource)

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchText(value);
        if (searchText === '') {
            setFilteredData(dataSource)
        } else {
            const filteredDataSource = dataSource.filter((item) =>
                item.reference.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filteredDataSource)
        }
    };

    return (
      <div className='flex flex-col w-full bg-[#F5F5F5]'>
        <div className='flex flex-col'>
          <div className='flex'>
            <SideNav sidebar={sidebar} />
            <main className='bg-[#F5F5F5] w-[100vw] md:w-[90vw] flex flex-col min-h-[88vh] 2xl:min-h-[90vh] px-[2.8vw] pt-[1.7vw]'>
              <div className=' w-full xl:w-[79.3vw]'>
                <div className='w-[100%] bg-[#005B61]  flex justify-between text-white font-[poppins]'>
                  <div className='flex w-[40%] justify-between px-[2.2%] py-[0.8vw]'>
                    <div className='flex flex-col'>
                      <span className='text-[12px] md:text-[14px] xl:text-[1.5vw] font-[700]'>
                        Okunade Sherif Damilare
                      </span>
                      <span className='flex items-center justify-between text-[9px] md:text-[11px] xl:text-[0.9vw] font-[400] mt-[10px] md:mt-[16px] xl:mt-[0.6vw]'>
                        <span className='flex items-center'>
                          <i class='fa-regular fa-envelope mr-[0.3vw]'></i>{" "}
                          {user.email}
                        </span>
                        <span className='flex items-center  ml-[0.5vw]'>
                          <i class='fa-solid fa-phone mr-[0.3vw]'></i>{" "}
                          07064413800
                        </span>
                      </span>
                    </div>
                    <Divider
                      type='vertical'
                      style={{ backgroundColor: "white", height: "95%" }}
                    />
                    <div className='font-[poppins] flex flex-col justify-between '>
                      <span className='text-[10px] md:text-[12px] xl:text-[1.1vw] font-[600]'>
                        User ID
                      </span>
                      <span className='text-[9px] md:text-[11px] xl:text-[0.9vw] font-[400]'>
                        0091282732
                      </span>
                    </div>
                  </div>
                  <div className='text-white w-[25%] flex justify-between items-center mr-[2vw] text-[12px] md:text-[14px] xl:text-[1.7vw]'>
                    <Divider
                      type='vertical'
                      style={{ backgroundColor: "white", height: "100%" }}
                    />
                    <span>
                      <i class='fa-regular fa-file'></i>
                    </span>
                    <Divider
                      type='vertical'
                      style={{ backgroundColor: "white", height: "100%" }}
                    />
                    <span>
                      <i class='fa-regular fa-calendar'></i>
                    </span>
                    <Divider
                      type='vertical'
                      style={{ backgroundColor: "white", height: "100%" }}
                    />
                    <span>
                      <i class='fa-solid fa-cart-shopping'></i>
                    </span>
                    <Divider
                      type='vertical'
                      style={{ backgroundColor: "white", height: "100%" }}
                    />
                    <span>
                      <i class='fa-solid fa-circle-xmark'></i>
                    </span>
                  </div>
                </div>
                <div className='flex justify-between items-center bg-white p-[10px] md:p-[16px]  xl:px-[2.2%] xl:py-[0.8vw]'>
                  <div className='w-[70%] flex justify-between'>
                    <div className='flex flex-col '>
                      <span className='text-[#282828] font-[500] text-[10px] md:text-[1px] xl:text-[1.2vw]'>
                        Password
                      </span>
                                        <span className='mt-[0.5vw] text-[#575757] text-[7px] md:text-[10px] xl:text-[0.9vw] font-[400]'>
                        adeleksiju!@#
                      </span>
                    </div>
                    <div className='flex flex-col '>
                                        <span className='text-[#282828] font-[500] text-[10px] md:text-[1px] xl:text-[1.2vw]'>
                        User Type
                      </span>
                                        <span className='mt-[0.5vw] text-[#575757] text-[7px] md:text-[10px] xltext-[0.9vw] font-[400]'>
                        Admin
                      </span>
                    </div>
                    <div className='flex flex-col '>
                                        <span className='text-[#282828] font-[500] text-[10px] md:text-[1px] xl:text-[1.2vw]'>
                        Date Registered
                      </span>
                                        <span className='mt-[0.5vw] text-[#575757] text-[7px] md:text-[10px] xltext-[0.9vw] font-[400]'>
                        10/01/2023
                      </span>
                    </div>
                    <div className='flex flex-col '>
                                        <span className='text-[#282828] font-[500] text-[10px] md:text-[1px] xl:text-[1.2vw]'>
                        Address
                      </span>
                                        <span className='mt-[0.5vw] text-[#575757] text-[7px] md:text-[10px] xltext-[0.9vw] font-[400]'>
                        141 Carfin Street, Motherwell ML1 4ET
                      </span>
                    </div>
                  </div>
                                <button className='underline text-[#005B61] font-[600] text-[10px] md:text-[1px] xl:text-[1.2vw]'>
                    View Profile
                  </button>
                </div>
                {/* GRAPHS */}
                <div className='mt-[30px] md:mt-[40px] xl:mt-[1vw] flex flex-col lg:flex-row justify-between w-full'>
                  <div
                    id='table'
                    className='w-full lg:w-[75%] bg-[#ffffff] py-[16px] px-[24px] xl:py-[1vw] xl:px-[2vw] flex flex-col'>
                    <div className='flex items-center justify-between'>
                      <h1 className='text-[10px] md:text-[13px] xl:text-[1.2vw] text-[#282828]'>
                        Recent Transactions
                      </h1>

                      <Input
                        style={customInputStyle}
                        placeholder='Search'
                        onChange={handleSearch}
                        value={searchText}
                        suffix={
                          <Space>
                            <SearchOutlined style={customIconStyle} />
                          </Space>
                        }
                      />
                    </div>
                    <div className='w-[100vw] md:w-full customerdbtablediv mt-[1.5vw]'>
                      <Table
                        columns={columns}
                        className='w-full'
                        dataSource={
                          searchText === "" ? dataSource : filteredData
                        }
                        bordered
                        key={1}
                      />
                    </div>
                  </div>

                  <div className='w-[50%] md:mx-0 mt-[16px] lg:mt-0 lg:w-[23%] bg-[#ffffff] p-[1%]'>
                    <div className='w-full flex items-center justify-between'>
                      <h1 className='text-[10px] md:text-[12px] xl:text-[1.1vw] font-[500] text-[#282828]'>
                        Recent Purchases
                      </h1>
                      <span className='text-[#005B61] text-[10px] md:text-[11px] xl:text-[0.9vw] font-[500] underline'>
                        View all
                      </span>
                    </div>
                    <div className='w-full'>
                      <List
                        itemLayout='horizontal'
                        dataSource={orders}
                        renderItem={(order) => (
                          <OrderListItem
                            merchantName={order.merchantName}
                            items={order.store}
                            date={order.date}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
}

export default Dashboard