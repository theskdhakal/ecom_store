import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "./CatAction";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { setShowModal } from "../../components/modal/ModalSlice";
import { CustomModal } from "../../components/modal/CustomModal";
import { EditCatForm } from "./EditCatForm";

export const CatTable = () => {
  const dispatch = useDispatch();
  const [selectedCat, setSelectedCat] = useState({});
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  const handleOnEdit = (item) => {
    setSelectedCat(item);
    dispatch(setShowModal(true));
    console.log(selectedCat);
  };

  return (
    <>
      {selectedCat.slug && (
        <CustomModal heading="update category">
          <EditCatForm editCat={selectedCat} />
        </CustomModal>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, i) => (
            <tr key={item.slug}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>
                <Button
                  className="d-grid"
                  onClick={() => {
                    handleOnEdit(item);
                  }}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
