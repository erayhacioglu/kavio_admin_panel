
import { FaEdit, FaEye, FaPlusCircle } from "react-icons/fa";
import BreadCrumb from "../../../components/BreadCrumb";
import Table from "../../../components/Table";
import { FaArrowRotateLeft,FaLayerGroup } from "react-icons/fa6";
import { Link } from "react-router";
import { useState } from "react";
import BasicModal from "./BasicModal";

const GroupManagement = () => {
  const [show,setShow] = useState(false);
    const columns = [
    {
      accessorKey: "companyName",
      header: "Şirket",
    },
    {
      accessorKey: "city",
      header: "İl",
    },
    {
      accessorKey: "county",
      header: "İlçe",
    },
    {
      accessorKey:"a",
      header:"",
      cell:({row}) => (
        <div className="btn_groups">
          <Link to={`/user/10/profile`} className="btn btn-sm btn_center btn-primary"><FaEye /></Link>
          <button className="btn btn-sm btn_center btn-success"><FaEdit /></button>
          <button className="btn btn-sm btn_center btn-warning"><FaLayerGroup /></button>
          <button className="btn btn-sm btn_center btn-danger"><FaArrowRotateLeft /></button>
        </div>
      )
    }
  ];
    return(
      <>
        <div className="container">
      <BreadCrumb pageTitle="Grup Listesi"/>
      <div className="row margin-25">
        <div className="col-md-12">
          <Table
            columns={columns}
            endpoint="https://biovirtualapi.ibb.istanbul/api/public/jobs"
            paramsMapper={(params) => ({
              page: params.page,
              size: params.size,
              keyword: params.keyword,
            })}
            headerButtons={
              <>
                <button className="btn btn-sm btn-primary d-flex align-items-center" onClick={() => setShow(true)}><FaPlusCircle />&nbsp;Modal Aç</button>
              </>
            }
          />
        </div>
      </div>
    </div>
    <BasicModal show={show} setShow={setShow}/>
    </>
    );
}

export default GroupManagement;