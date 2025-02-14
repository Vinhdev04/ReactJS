import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
function ModalProduct(props) {
  const { onReload } = props;
  // # initial modal
  const [isShowModel, setShowModel] = useState(false);

  // # initial storage data
  const [data, setData] = useState({});

  // # call api get category data
  const [category, setCategory] = useState([]);
  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     fetch("http://localhost:3000/products", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCategory(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   fetchAPI();
  // }, []);
  console.log(category);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // # handle close modal
  const closeModal = () => {
    setShowModel(false);
  };

  // # handle open modal
  const openModal = () => {
    setShowModel(true);
  };

  // # handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // # POST data to database
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);

        // close model
        if (data) {
          setShowModel(false);
          setData({});
          onReload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // # handle when user onchange input
  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <button
        className="btnCreate"
        style={{ backgroundColor: "orange", margin: "0 20px" }}
        onClick={openModal}
      >
        + Create new Product
      </button>
      <Modal
        isOpen={isShowModel}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleOnchange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="prices">Prices</label>
            <input
              type="text"
              name="price"
              id="prices"
              onChange={handleOnchange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="discount">Discount</label>
            <input
              type="text"
              name="discountPercentage"
              id="discount"
              onChange={handleOnchange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="stock">Stock</label>
            <input
              type="text"
              name="stock"
              id="stock"
              onChange={handleOnchange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="text"
              name="thumbnail"
              id="thumbnail"
              onChange={handleOnchange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="6"
              onChange={handleOnchange}
              required
            ></textarea>
          </div>
          <div className="control-btn">
            <button className="btn btn-cancel" onClick={closeModal}>
              Cancel
            </button>
            <input className="btn btn-add" type="submit" value="Add" />
          </div>
        </form>
      </Modal>
    </>
  );
}

export default ModalProduct;
