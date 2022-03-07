import React, {useEffect, useState} from "react";
import './App.css';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import {fetchApplications, fetchLoadingPoints, fetchUnloadingPoints} from "./store/applications";
import {useDispatch} from "react-redux";
import {applications, loadingPoints, unloadingPoints} from "./data";
import ScreenForm from "./components/ScreenForm";

import { MapContainer,  Marker, TileLayer, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'




const App = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchApplications(applications))
        dispatch(fetchLoadingPoints(loadingPoints))
        dispatch(fetchUnloadingPoints(unloadingPoints))
    }, [dispatch])

  return (
    <div className="App">
        <Button type="primary" onClick={showModal}>
            Показать заявки
        </Button>
        <Modal title="Заявки" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
            <ScreenForm />
        </Modal>
        <div >
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>

    </div>
  );
}

export default App;
