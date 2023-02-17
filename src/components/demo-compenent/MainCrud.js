import React, { useState } from "react";
import DynamicCrudBaseView from './BaseCrud'
import MyModal from "../forms/MyModal";
import { Button } from "react-bootstrap";

const Users = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
            },
            {
                Header: 'Update',
                accessor: 'update',
                Cell: cellObj => <Button variant='secondary' onClick={() => handleUpdate(cellObj.row)}>Update</Button>,
            },
            {
                Header: 'Delete',
                accessor: 'id',
                Cell: cellObj => <MyModal title="Delete entry" mainButtonText="Delete" launchButtonText="Delete" action={() => {handleDelete(cellObj.row)}} />,
            },
            {
                Header: 'Newsletter',
                accessor: 'newsletter',
            },

        ],
        []
    )
    const data = React.useMemo(() => [
        {
            id: 0,
            age: 5,
            firstName: "firstName",
            lastName: "lastName",
            progress: 60,
            status: "relationship",
            subRows: undefined,
            visits: 40,
            newsletter: false
        }, {
            id: 1,
            age: 5,
            firstName: "firstName",
            lastName: "lastName",
            progress: 60,
            status: "relationship",
            subRows: undefined,
            visits: 40,
            newsletter: false
        }
    ], [])

    const fieldDefinitions = [
        {
            name: "firstName",
            label: "First Name",
            type: "text",
        },
        {
            name: "lastName",
            label: "Last Name",
            type: "text",
        },
        {
            name: "age",
            label: "Age",
            type: "number",
        },
        {
            name: "progress",
            label: "Progress",
            type: "number",
        },
        {
            name: "status",
            label: "Status",
            type: "string",
        },
        {
            name: "newsletter",
            label: "Subscribe to Newsletter",
            type: "checkbox",
        },
    ];
    const initialValues = {
        firstName: "",
        lastName: "",
        age: 0,
        progress: 0,
        status: "",
        visits: 0,
        newsletter: false
    };

    const [formData, setFormData] = useState(initialValues);
    const [dataList, setDataList] = useState(data);
    const [selectedData, setSelectedData] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (values) => {
        if (selectedData) {
            const updatedList = dataList.map((item) => {
                if (item.id === selectedData.id) {
                    console.log(item, "🚀 ~ file: MainCrud.js:116 ~ handleSubmit ~ selectedData", selectedData)
                    return { ...item, ...values };
                }
                return item;
            });
            setDataList(updatedList);
            setSelectedData(null);
        } else {
            setDataList([...dataList, { id: dataList.length + 1, ...values }]);
        }
        setFormData(initialValues);
        setShowForm(false);
    };

    const handleCreate = () => {
        setFormData(initialValues);
        setShowForm(true);
    };

    const handleUpdate = (data) => {
        setFormData(data.original);
        setSelectedData(data.original);
        setShowForm(true);
    };

    const handleDelete = (data) => {
        setDataList(dataList.filter((item) => item.id !== data.id));
    };


    return (
        <>
            <DynamicCrudBaseView
                fieldDefinitions={fieldDefinitions}
                data={dataList}
                columns={columns}
                formData={formData}
                showForm={showForm}
                handleDelete={handleDelete}
                handleSubmit={handleSubmit}
                handleCreate={handleCreate}
                handleUpdate={handleUpdate}
            />
        </>
    );
};

export default Users;