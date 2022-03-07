
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectApplicationsData,
    selectLoadingPoints,
    selectUnloadingPoints,
    setLoadingPointToApplication, setUnLoadingPointToApplication
} from "../../store/applications";
import {Table, Select} from "antd";
const { Column } = Table;
const { Option } = Select;


const TableApplication = () => {

    const [selectedRow, setSelectedRow] = useState(null)
    const dispatch = useDispatch()
    const applications = useSelector(selectApplicationsData)
    const loadingPointsData = useSelector(selectLoadingPoints)
    const unLoadingPointsData = useSelector(selectUnloadingPoints)

    const handleChangeLoadingPoint = (value) => {
        if (selectedRow) {
            dispatch(setLoadingPointToApplication({id: selectedRow, loadingPoint:value}))
        }
    }

    const handleChangeUnLoadingPoint = (value) => {
        if (selectedRow) {
            dispatch(setUnLoadingPointToApplication({id: selectedRow, unLoadingPoint:value}))
        }
    }



    return (
        <>


            <Table dataSource={applications}
                   onRow={(record) => {
                        return{
                            onClick: () => { setSelectedRow( prevState => {
                                if( prevState !== record.id) {
                                    return record.id
                                } else {return prevState}

                            }); }
                        }
                    }}
                   rowClassName={(record) => {
                       return record.id === selectedRow ? 'ant-table-row-selected' : ''
                   }}
            >
                <Column title='№ заявки' dataIndex={'id'} key={'id'} width={'20px'}/>
                <Column title='Name' dataIndex={'title'} key={'title'}/>
                <Column title='Описание' dataIndex={'description'} key={'description'}/>
                <Column
                    title='точка погрузки'
                    dataIndex={'loadingPoint'}
                    key={'loadingPoint'}
                    render={loadingPoint => (
                        <Select defaultValue={loadingPoint} value={loadingPoint} style={{ width: 50 }} onChange={handleChangeLoadingPoint}>
                            {loadingPointsData.map(({id})=> (
                                <Option value={id}>{id}</Option>
                            ))}
                        </Select>
                    )}
                />
                <Column
                    title='точка выгрузки'
                    dataIndex={'unloadingPoint'}
                    key={'unloadingPoint'}
                    render={unloadingPoint=> (
                        <Select defaultValue={unloadingPoint} value={unloadingPoint} style={{ width: 50 }} onChange={handleChangeUnLoadingPoint}>
                            {unLoadingPointsData.map(({id})=> (
                                <Option value={id}>{id}</Option>
                            ))}
                        </Select>
                    )}
                />
            </Table>
        </>
    );
}

export default TableApplication;
